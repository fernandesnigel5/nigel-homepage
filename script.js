document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. DEFINE STYLES AS A STRING ---
    const cssStyles = `
        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            color: #fff;
            text-align: center;
            background: linear-gradient(135deg, #6dd5ed, #2193b0, #7b4397, #dc2430); /* Fancy gradient background */
            background-size: 400% 400%;
            animation: gradientAnimation 15s ease infinite;
        }

        @keyframes gradientAnimation {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }

        .container {
            background-color: rgba(0, 0, 0, 0.6);
            padding: 40px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            max-width: 800px;
            margin: 20px;
            animation: fadeIn 2s ease-out;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        h1 {
            font-size: 3em;
            margin-bottom: 20px;
            color: #ffda79;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }

        .profile-pic {
            width: 180px;
            height: 180px;
            border-radius: 50%;
            object-fit: cover;
            border: 5px solid #ffda79;
            margin-bottom: 25px;
            box-shadow: 0 0 15px rgba(255, 218, 121, 0.7);
        }

        p {
            font-size: 1.2em;
            line-height: 1.6;
            margin-bottom: 15px;
        }
    `;

    // --- 2. INJECT STYLES INTO THE HEAD ---
    const styleElement = document.createElement('style');
    styleElement.textContent = cssStyles;
    document.head.appendChild(styleElement);


    // --- 3. CREATE AND ASSEMBLE CONTENT ---

    // Create the main content container
    const container = document.createElement('div');
    container.className = 'container';

    // Create the main heading
    const heading = document.createElement('h1');
    heading.textContent = 'Hi Nigel!';

    // Create the profile picture element
    const profilePic = document.createElement('img');
    // **IMPORTANT:** Ensure this matches your image file name!
    profilePic.src = 'your_photo.jpg'; 
    profilePic.alt = "Nigel's Profile Picture";
    profilePic.className = 'profile-pic';

    // Define the biography text
    const paragraphs = [
        "Welcome to your personal space! It's great to have a spot to share a bit about what makes life exciting.",
        "I'm someone who loves to embrace adventure and the open road. My heart truly comes alive when I'm **going on a trip**, exploring new places, experiencing different cultures, and creating unforgettable memories. There's nothing quite like the thrill of discovering what's around the next corner!",
        "When it comes to staying active, you'll often find me on the field, passionately **playing football**. The camaraderie, the strategy, and the sheer joy of the game are incredibly invigorating. And for a different kind of freedom, I'm a big fan of **bike rides**. Whether it's a long journey or a quick spin, feeling the wind and enjoying the scenery is a perfect way to unwind and recharge.",
        "This page is a little snapshot of my world, and I'm always looking forward to the next adventure!"
    ];
    
    // Append elements to the container
    container.appendChild(heading);
    container.appendChild(profilePic);
    
    paragraphs.forEach(text => {
        const p = document.createElement('p');
        // We use innerHTML to render the <b> tags around your hobbies
        p.innerHTML = text; 
        container.appendChild(p);
    });

    // Insert the entire container into the body
    document.body.prepend(container);
});
