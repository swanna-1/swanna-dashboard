import mongoose, { Connection } from "mongoose";

import { dbConnect } from "@/lib/mongoose";

interface IUrl extends Document {
    url: string;
    alias: string;
    clicks: number;
    expiresAt: Date;
    lastAccessed?: Date;
    createdByIP?: string
    createdAt: Date;
}

const UrlSchema = new mongoose.Schema<IUrl>({

    url: {
        type: String,
        required: true
    },

    alias: {
        type: String,
        required: true,
        unique: true,
        default: () => "/" + Math.random().toString(36).substring(2, 8),
        index: true
    },

    clicks: {
        type: Number,
        default: 0
    },

    expiresAt: {
        type: Date,
        default: null
    },

    lastAccessed: { type: Date },

    createdByIP: { type: String }

}, { timestamps: true });

const useUrlModel = async (dbName: string) => {
    const connection: Connection = await dbConnect(dbName);
    return connection.model<IUrl>("Url", UrlSchema);
};

export type { IUrl };
export { useUrlModel };