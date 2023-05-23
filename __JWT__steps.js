/**
 * JWT : secure your api
 * ---------------------------------------------
 *                  CREATE TOKEN
 * ---------------------------------------------
 * 1. client: after user login send user basic info to create token
 * 2. in the server side : install npm i jsonwebtoken
 * 3. import jsonwebtoken
 * 4. jwt.sign(payload, secret, {expires})
 * 5. return token to the client side
 * 6. after receiving the token store it either http only cookies or localStorage(second best solution)
 * 7. use a general space onAuthStateChange > AuthProvider
 * -----------------------------------------------
 *              SEND TOKEN TO SERVER
 * -----------------------------------------------
 * for sensitive api call () send authorization headers {authorization : "bearer `token`"} 
 * -----------------------------------------------
 *              SEND TOKEN TO SERVER
 * -----------------------------------------------
*/