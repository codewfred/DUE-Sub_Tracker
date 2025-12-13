// Initialize Supabase
// REPLACE THESE WITH YOUR ACTUAL SUPABASE KEYS
const supabaseUrl = 'https://oajmajynfbcfxjhpjfam.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ham1hanluZmJjZnhqaHBqZmFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU2NDMwOTgsImV4cCI6MjA4MTIxOTA5OH0.sr9fNLj7Y4JkqYKw4H9tORrcRG3wJ9GxjtS5jvB_p1s';
const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);

const authForm = document.getElementById('auth-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const toggleBtn = document.getElementById('toggle-btn');
const formTitle = document.getElementById('form-title');
const toggleText = document.getElementById('toggle-text');
const submitBtn = authForm.querySelector('button');
const messageDiv = document.getElementById('message');
const githubBtn = document.getElementById('github-login');
const twitterBtn = document.getElementById('twitter-login');

let isLogin = true;

// Function to update UI based on state
function updateAuthUI() {
    if (isLogin) {
        formTitle.textContent = 'Welcome back';
        submitBtn.textContent = 'Sign In';
        toggleText.textContent = "Don't have an account?";
        toggleBtn.textContent = 'Sign Up';
        window.history.replaceState(null, '', 'auth.html?mode=login');
    } else {
        formTitle.textContent = 'Create an account';
        submitBtn.textContent = 'Sign Up';
        toggleText.textContent = "Already have an account?";
        toggleBtn.textContent = 'Sign In';
        window.history.replaceState(null, '', 'auth.html?mode=signup');
    }
    messageDiv.textContent = '';
}

// Check URL params on load (e.g. auth.html?mode=signup)
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('mode') === 'signup') {
    isLogin = false;
    updateAuthUI();
}

// Toggle between Login and Signup
toggleBtn.addEventListener('click', () => {
    isLogin = !isLogin;
    updateAuthUI();
});

// Handle Form Submission
authForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = emailInput.value;
    const password = passwordInput.value;

    messageDiv.style.color = '#888';
    messageDiv.textContent = 'Processing...';

    try {
        if (isLogin) {
            // Sign In
            const { data, error } = await supabaseClient.auth.signInWithPassword({
                email: email,
                password: password,
            });
            if (error) throw error;
            
            messageDiv.style.color = '#4ade80'; // Green
            messageDiv.textContent = 'Success! Redirecting...';
            setTimeout(() => window.location.href = 'dashboard.html', 1000);
        } else {
            // Sign Up
            const { data, error } = await supabaseClient.auth.signUp({
                email: email,
                password: password,
            });
            if (error) throw error;

            messageDiv.style.color = '#4ade80';
            messageDiv.textContent = 'Account created! Please check your email to confirm.';
        }
    } catch (error) {
        console.error('Auth Error:', error);
        messageDiv.style.color = '#ef4444'; // Red
        messageDiv.textContent = error.message;
    }
});

// Social Login Logic
async function signInWithProvider(provider) {
    try {
        const { data, error } = await supabaseClient.auth.signInWithOAuth({
            provider: provider,
            options: {
                redirectTo: window.location.origin + '/dashboard.html'
            }
        });
        if (error) throw error;
    } catch (error) {
        console.error('Social Auth Error:', error);
        messageDiv.style.color = '#ef4444';
        messageDiv.textContent = error.message;
    }
}

if (githubBtn) {
    githubBtn.addEventListener('click', () => signInWithProvider('github'));
}

if (twitterBtn) {
    twitterBtn.addEventListener('click', () => signInWithProvider('twitter'));
}