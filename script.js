document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('input');
    const chatbox = document.getElementById('chatbox');

    // Define keywords and their corresponding responses in an object
    const responses = {
        'hello': 'n1gga you know me already stop with this sh@t!',
        'hey': 'ask me some shit im bored, jesus christ.',
        'how are you': 'I feel bad for you, fat f8ck.',
        'bye': 'Thats what I thought, p-u-s-s-y.',
        'name': 'My names John Flynn, ask me anything Ill give you my best response',
        'bro': 'im not your brother unless you know me well cuh',
        'emma': 'holy shit she has a gyat i wanna tap that',
        'lmao': 'Nothings fuckin funny, unless its about harrisions face',
        'chill': 'nija im chill your the one in my face and shi',
        'colby': 'bro acts tough even though that nijer isnt',
        'John': 'bro better not be talking bout me',
        // Add more keywords and responses here
    };

    input.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            processSentence(input.value.toLowerCase());
            input.value = '';
        }
    });

    function processSentence(sentence) {
        let response = '';

        // Check if the sentence contains any of the keywords
        for (const keyword in responses) {
            if (sentence.includes(keyword)) {
                response = responses[keyword];
                break; // Stop searching for keywords once a match is found
            }
        }

        // If no matching keyword is found, provide a default response
        if (!response) {
            response = 'Speak up to me p@ssy boy.';
        }

        const message = `<p><strong>You:</strong> ${sentence}</p><p><strong>John Flynn:</strong> ${response}</p>`;
        chatbox.innerHTML += message;

        // Scroll to the bottom of the chatbox
        chatbox.scrollTop = chatbox.scrollHeight;

        // Remove older messages if the chatbox height exceeds a certain limit
        const maxChatboxHeight = 400; // Set your desired maximum height
        if (chatbox.scrollHeight > maxChatboxHeight) {
            chatbox.innerHTML = message; // Show the latest message
        }
    }
});
