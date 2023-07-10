import { AsyncThunkAction, Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

type ActionCreatorType<Return, PropsArgs, RejectedValue> = (
    // eslint-disable-next-line no-unused-vars
    arg: PropsArgs
) => AsyncThunkAction<
    Return,
    PropsArgs,
    {
        rejectValue: RejectedValue;
    }
>;

export class TestAsyncThunk<Return, PropsArgs, RejectedValue> {
    dispatch: Dispatch;

    getState: () => StateSchema;

    actionCreator: ActionCreatorType<Return, PropsArgs, RejectedValue>;

    constructor(
        actionCreator: ActionCreatorType<Return, PropsArgs, RejectedValue>,
    ) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn();
    }

    async callThunk(arg: PropsArgs) {
        const action = this.actionCreator(arg);
        const result = await action(this.dispatch, this.getState, undefined);

        return result;
    }
}
