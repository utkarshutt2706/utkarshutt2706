import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialise once — Resend reads RESEND_API_KEY from process.env automatically
const resend = new Resend(process.env.RESEND_API_KEY);

// The address Resend will send FROM.
// Must be a verified domain in your Resend dashboard.
// While testing you can use the sandbox address: onboarding@resend.dev
const FROM_ADDRESS = process.env.FROM_EMAIL ?? 'onboarding@resend.dev';

// The address all contact form submissions land in
const TO_ADDRESS = 'utkarshutt2706@gmail.com';

export interface ContactPayload {
    name: string;
    email: string;
    message: string;
}

function isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
    // ── Parse body ──────────────────────────────────────────────
    let body: ContactPayload;
    try {
        body = await req.json();
    } catch {
        return NextResponse.json(
            { error: 'Invalid request body.' },
            { status: 400 },
        );
    }

    const { name, email, message } = body;

    // ── Basic server-side validation ────────────────────────────
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
        return NextResponse.json(
            { error: 'All fields are required.' },
            { status: 400 },
        );
    }

    if (!isValidEmail(email)) {
        return NextResponse.json(
            { error: 'Invalid email address.' },
            { status: 400 },
        );
    }

    // ── Send via Resend ─────────────────────────────────────────
    const { error } = await resend.emails.send({
        from: FROM_ADDRESS,
        to: TO_ADDRESS,
        replyTo: email, // hitting Reply in Gmail goes back to the sender
        subject: `Portfolio contact from ${name}`,
        // Plain-text fallback
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
        // HTML email with basic styling
        html: `
            <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto; color: #1a1a2e;">
                <h2 style="margin-bottom: 4px; color: #00c896;">New portfolio enquiry</h2>
                <p style="color: #888; font-size: 13px; margin-bottom: 24px;">
                    Sent via utkarshutt2706.github.io
                </p>
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                    <tr>
                        <td style="padding: 8px 0; font-weight: 600; width: 80px; vertical-align: top;">Name</td>
                        <td style="padding: 8px 0;">${name}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; font-weight: 600; vertical-align: top;">Email</td>
                        <td style="padding: 8px 0;">
                            <a href="mailto:${email}" style="color: #00c896;">${email}</a>
                        </td>
                    </tr>
                </table>
                <div style="background: #f5f5f5; border-radius: 8px; padding: 16px 20px; white-space: pre-wrap; line-height: 1.65;">
                    ${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}
                </div>
            </div>
        `,
    });

    if (error) {
        console.error('[Resend error]', error);
        return NextResponse.json(
            { error: 'Failed to send email. Please try again.' },
            { status: 500 },
        );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
}
