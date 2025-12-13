// Initialize Supabase
const supabaseUrl = 'https://oajmajynfbcfxjhpjfam.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ham1hanluZmJjZnhqaHBqZmFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU2NDMwOTgsImV4cCI6MjA4MTIxOTA5OH0.sr9fNLj7Y4JkqYKw4H9tORrcRG3wJ9GxjtS5jvB_p1s';
const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);

// Check Authentication Status
async function checkSession() {
    const { data: { session } } = await supabaseClient.auth.getSession();
    
    if (!session) {
        // If no user is logged in, redirect to login page
        window.location.href = 'auth.html';
    } else {
        // Display user email
        const emailElement = document.getElementById('user-email');
        if (emailElement) {
            emailElement.textContent = session.user.email;
        }
    }
}

// Run check on load
checkSession();

// Handle Logout
document.getElementById('logout-btn').addEventListener('click', async () => {
    const { error } = await supabaseClient.auth.signOut();
    if (!error) {
        window.location.href = 'index.html';
    }
});