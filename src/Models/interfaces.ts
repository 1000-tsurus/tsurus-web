export type UserModel = {
    id: number
    full_name: string
    email: string
    icon_url: string
    type_id: number
    created_at: string
    updated_at: string
    abouts: any[]
    employer: {
        id: number
        role: string
        employer: string;
        entry_date_time: string;
        created_at: string;
        updated_at: string;
    }[]
    contact: any[]
    occupation: any[]
    skill_category: {
        id: number;
        skill_name: string;
        created_at: string;
        updated_at: string;
    }[]
    to_help: {
        id: number
        to_help_text: string
        created_at: string
    }[]
    trajectory: {
        id: number
        trajectory_text: string
        created_at: string
    }[]
    phone: {
        id: number
        phone_number: string
        ddd: string
        country_code: string 
        is_wpp: number
        is_public: number
        created_at: string
        updated_at: string
    }[]
}
