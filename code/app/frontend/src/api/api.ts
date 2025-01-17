import { ChatResponse, ConversationRequest } from "./models";

export async function conversationApi(options: ConversationRequest, abortSignal: AbortSignal): Promise<Response> {
    console.log("conversationApi", options)

    const response = await fetch("/api/conversation/azure_byod", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            messages: options.messages,
            prompt: options.prompt
        }),
        signal: abortSignal
    });

    return response;
}


export async function customConversationApi(options: ConversationRequest, abortSignal: AbortSignal): Promise<Response> {
    console.log("customConversationApi", options)

    const response = await fetch("/api/conversation/custom", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            messages: options.messages,
            conversation_id: options.id,
            prompt: options.prompt
        }),
        signal: abortSignal
    });

    return response;
}
