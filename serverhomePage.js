const homePage = `<body style="background-color: rgb(236, 237, 235)">
    <h1 style="text-align: center">HELLO THERE!</h1>
    <div style="width: 95%; margin: auto">
      <h2>USER API</h2>
      <p style="text-align: center; width: 60%; margin: auto">
        In this project you will few routes. You can use this api to register
        new user or login an existing or you can get detail of user by use of
        token of a particular user or use can token to get users list by user of
        token of user.
      </p>
      <table style="width: 100%; padding: 10px; margin: auto; margin-top: 5%">
        <thead style="text-transform: uppercase; width: 100%">
          <th
            style="
              text-align: center;
              margin-top: 10px;
              border: 1px solid black;
              padding: 5px;
            "
          >
            method
          </th>
          <th
            style="
              text-align: center;
              margin-top: 10px;
              border: 1px solid black;
              padding: 5px;
            "
          >
            Routes
          </th>
          <th
            style="
              text-align: center;
              margin-top: 10px;
              border: 1px solid black;
              padding: 5px;
            "
          >
            Detail of user
          </th>
          <th
            style="
              text-align: center;
              margin-top: 10px;
              border: 1px solid black;
              padding: 5px;
            "
          >
            success response
          </th>
          <th
            style="
              text-align: center;
              margin-top: 10px;
              border: 1px solid black;
              padding: 5px;
            "
          >
            error response
          </th>
        </thead>
        <tbody>
          <tr>
            <td
              style="border: 1px solid brown; padding: 10px; text-align: left"
            >
              POST
            </td>
            <td
              style="border: 1px solid brown; padding: 10px; text-align: left"
            >
              /auth/register
            </td>
            <td
              style="border: 1px solid brown; padding: 10px; text-align: left"
            >
              By use of this route you can register a new user
            </td>
            <td
              style="border: 1px solid brown; padding: 10px; text-align: left"
            >
              {error: false, token, message: "success"}
            </td>
            <td
              style="border: 1px solid brown; padding: 10px; text-align: left"
            >
              {error: true, message: "error"}
            </td>
          </tr>
          <tr>
            <td
              style="border: 1px solid brown; padding: 10px; text-align: left"
            >
              POST
            </td>
            <td
              style="border: 1px solid brown; padding: 10px; text-align: left"
            >
              /auth/login
            </td>
            <td
              style="border: 1px solid brown; padding: 10px; text-align: left"
            >
              By use of this route you can login a existing user
            </td>
            <td
              style="border: 1px solid brown; padding: 10px; text-align: left"
            >
              {error: false, token, message: "success"}
            </td>
            <td
              style="border: 1px solid brown; padding: 10px; text-align: left"
            >
              {error: true, message: "error"}
            </td>
          </tr>
          <tr>
            <td
              style="border: 1px solid brown; padding: 10px; text-align: left"
            >
              GET
            </td>
            <td
              style="border: 1px solid brown; padding: 10px; text-align: left"
            >
              /auth/users/details
            </td>
            <td
              style="border: 1px solid brown; padding: 10px; text-align: left"
            >
              On this route you will get user details (Need user token of user
              for this)
            </td>
            <td
              style="border: 1px solid brown; padding: 10px; text-align: left"
            >
              {error: false, user, message: "success"}
            </td>
            <td
              style="border: 1px solid brown; padding: 10px; text-align: left"
            >
              {error: true, message: "error"}
            </td>
          </tr>
          <tr>
            <td
              style="border: 1px solid brown; padding: 10px; text-align: left"
            >
              GET
            </td>
            <td
              style="border: 1px solid brown; padding: 10px; text-align: left"
            >
              /auth/users/list
            </td>
            <td
              style="border: 1px solid brown; padding: 10px; text-align: left"
            >
              On this route you will get only full name of user. (Need user
              token of user for this)
            </td>
            <td
              style="border: 1px solid brown; padding: 10px; text-align: left"
            >
              {error: false, user, message: "success"}
            </td>
            <td
              style="border: 1px solid brown; padding: 10px; text-align: left"
            >
              {error: true, message: "error"}
            </td>
          </tr>
          <tr>
            <td
              style="border: 1px solid brown; padding: 10px; text-align: left"
            >
              PUT
            </td>
            <td
              style="border: 1px solid brown; padding: 10px; text-align: left"
            >
              /auth/users/edit/:id
            </td>
            <td
              style="border: 1px solid brown; padding: 10px; text-align: left"
            >
              By use of this endpoint you can edit user data in database (edit
              also need user token and user make user to not edit his/her
              password)
            </td>
            <td
              style="border: 1px solid brown; padding: 10px; text-align: left"
            >
              {error: false, message: "success"}
            </td>
            <td
              style="border: 1px solid brown; padding: 10px; text-align: left"
            >
              {error: true, message: "error"}
            </td>
          </tr>
          <tr>
            <td
              style="border: 1px solid brown; padding: 10px; text-align: left"
            >
              DELETE
            </td>
            <td
              style="border: 1px solid brown; padding: 10px; text-align: left"
            >
              /auth/users/delete
            </td>
            <td
              style="border: 1px solid brown; padding: 10px; text-align: left"
            >
              By use of this endpoint you can delete a user from database (also
              need user token to delete)
            </td>
            <td
              style="border: 1px solid brown; padding: 10px; text-align: left"
            >
              {error: false, message: "success"}
            </td>
            <td
              style="border: 1px solid brown; padding: 10px; text-align: left"
            >
              {error: true, message: "error"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </body>`;
  export default homePage;