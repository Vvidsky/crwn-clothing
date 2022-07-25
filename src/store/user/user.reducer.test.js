import { USER_ACTION_TYPES } from './user.types';

import { userReducer } from './user.reducer';

const initialState = {
    currentUser: null,
    error: null,
    isLoading: false,
};

describe('userReducer', () => {
    it('should return initial state', () => {
        expect(userReducer(undefined, {})).toEqual(initialState);
    });

    it('should set currentUser to payload on signInSuccess action', () => {
        const mockUser = { id: 1, displayName: 'Yihua' };

        expect(
            userReducer(initialState, {
                type: USER_ACTION_TYPES.SIGN_IN_SUCCESS,
                payload: mockUser
            }).currentUser
        ).toEqual(mockUser);
    });

    it('should set currentUser to null on signOutFailed action', () => {
        expect(
            userReducer(initialState, {
                type: USER_ACTION_TYPES.SIGN_OUT_SUCCESS
            }).currentUser
        ).toBe(null);
    })

    it('Testing Errors', () => {
        const mockError = {
            message: 'errored',
            code: 404
          };

        expect(
            userReducer(initialState, {
                type: USER_ACTION_TYPES.SIGN_IN_FAILED,
                payload: mockError
            }).error
        ).toEqual(mockError);

        expect(
            userReducer(initialState, {
                type: USER_ACTION_TYPES.SIGN_OUT_FAILED,
                payload: mockError
            }).error
        ).toEqual(mockError);

        expect(
            userReducer(initialState, {
                type: USER_ACTION_TYPES.SIGN_UP_FAILED,
                payload: mockError
            }).error
        ).toEqual(mockError);
    });
})