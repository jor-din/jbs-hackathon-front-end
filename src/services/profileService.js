import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/profiles`

async function getAllProfiles() {
  const res = await fetch(BASE_URL, {
    headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
  })
  return await res.json()
}

async function profileDetails(profileId) {
  const res = await fetch(`${BASE_URL}/${profileId}/`, { 
    method: "GET",
    headers: { 'Authorization': `Bearer ${tokenService.getToken()}` }
  })
  return res.json()
}

export { getAllProfiles }
