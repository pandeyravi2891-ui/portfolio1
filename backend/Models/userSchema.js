const { supabase } = require("../config/database");

// User model for Supabase
class User {
    static async create(userData) {
        try {
            const { name, email, subject, description } = userData;

            const { data, error } = await supabase
                .from("users")
                .insert([
                    {
                        name,
                        email,
                        subject,
                        description,
                        created_at: new Date()
                    }
                ])
                .select();

            if (error) throw new Error(error.message);
            
            return data[0];
        } catch (err) {
            throw new Error(`Failed to create user: ${err.message}`);
        }
    }

    static async findAll() {
        try {
            const { data, error } = await supabase
                .from("users")
                .select("*");

            if (error) throw new Error(error.message);
            return data;
        } catch (err) {
            throw new Error(`Failed to fetch users: ${err.message}`);
        }
    }

    static async findById(id) {
        try {
            const { data, error } = await supabase
                .from("users")
                .select("*")
                .eq("id", id)
                .single();

            if (error) throw new Error(error.message);
            return data;
        } catch (err) {
            throw new Error(`Failed to fetch user: ${err.message}`);
        }
    }
}

module.exports = User;