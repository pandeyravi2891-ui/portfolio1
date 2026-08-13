const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

async function connect() {
    try {
        // Test the connection
        const { data, error } = await supabase.from("users").select("count");
        
        if (error) {
            console.error("Database Connection Error:", error);
            // Create table if it doesn't exist
            await createUsersTable();
        } else {
            console.log("Database Connected successfully");
        }
    } catch (err) {
        console.error("Connection Error:", err);
    }
}

async function createUsersTable() {
    try {
        const { error } = await supabase.rpc("create_users_table");
        if (error) {
            console.log("Users table might already exist or creation failed:", error.message);
        } else {
            console.log("Users table created successfully");
        }
    } catch (err) {
        console.log("Note: Create table manually in Supabase dashboard if needed");
    }
}

module.exports = { supabase, connect };
