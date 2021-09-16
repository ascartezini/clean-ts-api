export interface IEventDispatcher {
    dispatch: (eventName: string, data?: any) => void;
}