
import withSession from "../../lib/session";

const fakeAuth = async ({ password, username }) =>
  new Promise((resolve, reject) => {
    setTimeout(
      () =>
        username === "admin" && password === "admin"
          ? resolve({ name: "Fluxonauto da silva", id: "999" })
          : reject({ response: "failed", data: { message: "Invalid Login" } })
      , 400);
  })

export default withSession(async (req, res) => {
  const { username, password } = await req.body;

  try {
    const { name, id } = await fakeAuth({ username, password })
    const user = { isLoggedIn: true, name, id };
    req.session.set("user", user);
    await req.session.save();
    res.json(user);
  } catch (error) {
    const { response: fetchResponse } = error;
    res.status(fetchResponse?.status || 500).json(error.data);
  }
});
