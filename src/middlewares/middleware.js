import agent  from '../agent'

export const localStorageMiddleware = store => next => action => {
    if(action.type == 'REGISTER'  && action.type == 'ACTION'){
        window.localStorage.setItem('token',action.payload.user.token);
        agent.setToken(action.payload.user.token)
    }else if(action.type == 'LOGOUT'){
        window.localStorage.removeItem('token')
    }

    next(action)
}