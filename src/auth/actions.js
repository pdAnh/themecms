
export const authGetInfo = info => {
  return {
    type: "AUTH::GET_INFO",
    payload: info
  }
}

export const authControlLoginModal = value => {
  return {
    type: "AUTH::CONTROL_LOGIN_MODAL",
    payload: value
  }
}