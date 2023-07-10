import { DeepPartial } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';
import { StateSchema } from 'app/providers/StoreProvider';

describe('loginSlice.test', () => {
    test('test setUsername', () => {
        const state: DeepPartial<LoginSchema> = {
            username: '123',
        };
        expect(loginReducer(state as LoginSchema, loginActions.setUsername('admin'))).toEqual({username:'admin'})
    });

    test('test setPassword', () => {
        const state: DeepPartial<LoginSchema> = {
            password: '123',
        };
        expect(loginReducer(state as LoginSchema, loginActions.setPassword('888'))).toEqual({password: '888'})
    });
});
