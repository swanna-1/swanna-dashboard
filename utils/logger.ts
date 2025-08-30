export function Logger(message: string, ...args: any[]) {

    if (process.env.NODE_ENV === "development") { 
        console.log("[DEV]:", message, ...args) 
    }

}