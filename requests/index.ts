import axios from 'axios'

const ENDPOINT = 'https://social-login.druckland.de/api/v1/user/signin'

type Params = {
  email: string
  password: string
}

export async function login(params: Params) {
  try {
    const resp = await axios({
      url: ENDPOINT,
      method: 'POST',
      data: params,
    })

    return resp.data
  } catch (error) {
    throw error
  }
}
