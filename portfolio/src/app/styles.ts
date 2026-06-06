export const GLOBAL_STYLES = `
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,700;1,400&family=Syne:wght@700;800&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body { background: #0A0A0F; font-family: 'DM Sans', sans-serif; color: #E8E8F0; }

    ::-webkit-scrollbar { width: 4px; }
    ::-webkit-scrollbar-track { background: #0A0A0F; }
    ::-webkit-scrollbar-thumb { background: #2A2A3F; border-radius: 2px; }

    a { color: #00C896; text-decoration: none; }
    a:hover { opacity: 0.8; }

    .sec-label {
        font-size: 11px;
        color: #00C896;
        letter-spacing: 0.15em;
        text-transform: uppercase;
        margin-bottom: 12px;
        font-weight: 500;
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .sec-label::before {
        content: '';
        display: inline-block;
        width: 24px;
        height: 1px;
        background: #00C896;
    }

    .section-heading {
        font-family: 'Syne', sans-serif;
        font-weight: 800;
        font-size: clamp(28px, 4vw, 44px);
        color: #F0F0F8;
        letter-spacing: -0.02em;
        margin-bottom: 40px;
    }

    .btn-primary {
        padding: 11px 26px;
        background: #00C896;
        border: none;
        border-radius: 10px;
        color: #0A0A0F;
        font-family: 'DM Sans', sans-serif;
        font-size: 14px;
        font-weight: 700;
        cursor: pointer;
        transition: opacity 0.2s, transform 0.1s;
        letter-spacing: 0.02em;
        display: inline-block;
    }
    .btn-primary:hover { opacity: 0.87; }
    .btn-primary:active { transform: scale(0.98); }

    .btn-outline {
        padding: 11px 26px;
        border: 1px solid rgba(255,255,255,0.12);
        border-radius: 10px;
        color: #9090B0;
        font-family: 'DM Sans', sans-serif;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        background: none;
        transition: border-color 0.2s, color 0.2s;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        text-decoration: none;
    }
    .btn-outline:hover { border-color: rgba(255,255,255,0.25); color: #E8E8F0; opacity: 1; }

    .skill-chip {
        display: inline-block;
        padding: 5px 14px;
        border-radius: 100px;
        border: 1px solid rgba(255,255,255,0.1);
        font-size: 13px;
        color: #B0B0C8;
        margin: 4px;
        background: rgba(255,255,255,0.03);
        transition: border-color 0.2s, color 0.2s;
        cursor: default;
    }
    .skill-chip:hover { border-color: #00C896; color: #00C896; }

    .tag-pill {
        display: inline-block;
        padding: 3px 10px;
        border-radius: 100px;
        font-size: 10px;
        font-weight: 600;
        letter-spacing: 0.07em;
        text-transform: uppercase;
        margin-bottom: 8px;
    }

    .form-input {
        width: 100%;
        padding: 12px 16px;
        background: rgba(255,255,255,0.04);
        border: 1px solid rgba(255,255,255,0.1);
        border-radius: 10px;
        color: #E8E8F0;
        font-family: 'DM Sans', sans-serif;
        font-size: 15px;
        outline: none;
        transition: border-color 0.2s, background 0.2s;
    }
    .form-input:focus { border-color: #00C896; background: rgba(0,200,150,0.04); }
    .form-input::placeholder { color: #333350; }
`;
