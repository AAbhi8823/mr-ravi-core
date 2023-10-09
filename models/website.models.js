// create website model  for mr-ravi-core

const mongoose = require('mongoose');

const websiteSchema = new mongoose.Schema(
    {
        website_name: {
            type: String,
            required: true,
            trim: true,
        },
        website_logo: {
            type: String,
            required: false,
        },
        website_favicon: {
            type: String,
            required: false,
        },
        domain_name: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: false,
        },
        blogs: [
            {
              meta_data_description: { type: String, required: false },
              title: { type: String, required: false },
      
              home_page: { type: Boolean, default: false },
      
              image: { type: String, required: false },
              url: { type: String, required: false, unique: true },
              description: { type: String, required: false },
            },
          ],
        contact_us: [{
            name: { type: String, required: true },
            email: { type: String, required: true },
            phone: { type: String, required: true },
            message: { type: String, required: true },

        }],
        about_us: [{
            company_history: { type: String, required: true },
            company_growth: { type: String, required: true },
            company_mission: { type: String, required: true },
            company_values: { type: String, required: true },
            testimonials: [{ name: { type: String, required: true },
                 description: { type: String, required: true },
                 url:{type:String,required:true} 
                }],

                others_definedn_by_client:[{name:{type:String,required:true},

        }],

        }],
        newsletters: [{
            email: { type: String, required: true },
            isActive: { type: Boolean, default: true },
        }],
        social_media: [{
            name: { type: String, required: true },
            url: { type: String, required: true },
        }],


        isActive: {
            type: Boolean,
            default: true,
        },
    },
    {
        createdAt: {
            type: Date,
            default: new Date(Date.now()),
        },
        updatedAt: {
            type: Date,
            default: new Date(Date.now()),
        },
    },
    { timestamps: true }
);