const apiKey = import.meta.env.VITE_EMAIL_API_KEY;
const apiUrl = import.meta.env.VITE_EMAIL_API_URL;

export const sendEmail = async (name, email, subject, company = '' ,message) => {

    const emailData = {
        sender: {
            name: name,
            email: email,
        },
        to: [
            {
                email: 'heisjuanda@gmail.com',
            },
        ],
        subject: company ? `from ${company}: ${subject}` : subject,
        textContent: message,
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'api-key': apiKey,
            },
            body: JSON.stringify(emailData),
        });

        if (response.ok) {
            return 'sent';
        } else {
            return 'notSent';
        }
    } catch (error) {
        return 'error';
    }
};