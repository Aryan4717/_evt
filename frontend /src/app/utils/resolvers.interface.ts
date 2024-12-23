export interface RespHandler {
    next: (data: any) => void,
    error: (error: any) => void
}