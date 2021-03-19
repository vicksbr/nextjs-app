import withSession from "../../../lib/session"

export default withSession(async(req: any, res: any) => {
  
  switch (req.method) {
    case "POST":
      const { user, password } = req.body;
      
      if (user === "admin" && password === "admin") {
        res.statusCode = 200;
        req.session.set("user", {
          "name":"Fluxonauto da silva",
          "id":"999"
        });
        await req.session.save();
        res.status(200);
        res.json({});
      } else {
        res.statusCode = 401;
        res.json({
          error: "invalid credentials",
        });
      }
      break;
    default:
      res.statusCode = 400;
      break;
  }
})

