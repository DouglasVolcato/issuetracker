const chaiHttp = require("chai-http");
const chai = require("chai");
const assert = chai.assert;
const server = require("../server");

chai.use(chaiHttp);

suite("GET", function () {
  test("View issues on a project: GET request to /api/issues/apitest", function (done) {
    chai
      .request(server)
      .get("/api/issues/apitest/")
      .end(function (error, res) {
        assert.equal(res.status, 200, "Response status should be 200");
        assert.isArray(res.body, "Should return an array on success");
        done();
      });
  });

  test("View issues on a project: GET request to /api/issues/{project}", function (done) {
    chai
      .request(server)
      .get("/api/issues/5871dda29faedc3491ff93bb")
      .end(function (error, res) {
        assert.equal(res.status, 200, "Response status should be 200");
        assert.isObject(res.body, "Should return an object");
        done();
      });
  });
});

suite("POST", function () {
  test("Create an issue with every field: POST request to /api/issues/{project}", function (done) {
    chai
      .request(server)
      .post("/api/issues/apitest")
      .send({
        issue_title: "Any_name",
        issue_text: "Any_text",
        created_by: "Any_author",
        assigned_to: "Any_name",
        status_text: "Any_statusText",
      })
      .end(function (error, res) {
        assert.equal(res.status, 201, "Response status should be 200");
        assert.isObject(res.body, "Should return an object");
        done();
      });
  });

  test("Create an issue with only required fields: POST request to /api/issues/{project}", function (done) {
    chai
      .request(server)
      .post("/api/issues/apitest")
      .send({
        issue_title: "Any_name",
        issue_text: "Any_text",
        created_by: "Any_author",
      })
      .end(function (error, res) {
        assert.equal(res.status, 201, "Response status should be 201");
        assert.isObject(res.body, "Should return an object");
        done();
      });
  });

  test("Create an issue with missing required fields: POST request to /api/issues/{project}", function (done) {
    chai
      .request(server)
      .post("/api/issues/apitest")
      .send({
        assigned_to: "Any_name",
        status_text: "Any_statusText",
      })
      .end(function (error, res) {
        assert.equal(res.status, 401, "Response status should be 401");
        assert.isObject(res.body, "Should return an object");
        done();
      });
  });
});

suite("PUT", function () {
  test("Update one field on an issue: PUT request to /api/issues/{project}", function (done) {
    chai
      .request(server)
      .put("/api/issues/apitest")
      .send({
        _id: "5871dda29faedc3491ff93bb",
        issue_title: "Updated_title",
      })
      .end(function (error, res) {
        assert.equal(res.status, 200, "Response status should be 200");
        assert.isObject(res.body, "Should return an object");
        assert.equal(
          res.body.issue_title,
          "Updated_title",
          "Shound update issue title"
        );
        done();
      });
  });

  test("Update multiple fields on an issue: PUT request to /api/issues/{project}", function (done) {
    chai
      .request(server)
      .put("/api/issues/apitest")
      .send({
        _id: "5871dda29faedc3491ff93bb",
        issue_text: "Updated_text",
        created_by: "Updated_author",
        status_text: "Updated_statusText",
      })
      .end(function (error, res) {
        assert.equal(res.status, 200, "Response status should be 200");
        assert.isObject(res.body, "Should return an object");
        assert.equal(
          res.body.issue_text,
          "Updated_text",
          "Shound update issue text"
        );
        assert.equal(
          res.body.created_by,
          "Updated_author",
          "Shound update author"
        );
        assert.equal(
          res.body.status_text,
          "Updated_statusText",
          "Shound update status text"
        );
        done();
      });
  });

  test("Update an issue with missing _id: PUT request to /api/issues/{project}", function (done) {
    chai
      .request(server)
      .put("/api/issues/apitest")
      .send({
        issue_title: "Updated_title",
      })
      .end(function (error, res) {
        assert.equal(res.status, 401, "Response status should be 401");
        assert.isObject(res.body, "Should return an object");
        done();
      });
  });

  test("Update an issue with no fields to update: PUT request to /api/issues/{project}", function (done) {
    chai
      .request(server)
      .put("/api/issues/apitest")
      .send({
        _id: "5871dda29faedc3491ff93bb",
      })
      .end(function (error, res) {
        assert.equal(res.status, 401, "Response status should be 401");
        assert.isObject(res.body, "Should return an object");
        done();
      });
  });

  test("Update an issue with an invalid _id: PUT request to /api/issues/{project}", function (done) {
    chai
      .request(server)
      .put("/api/issues/apitest")
      .send({
        _id: "Wrong_id",
        issue_title: "Updated_title",
      })
      .end(function (error, res) {
        assert.equal(res.status, 401, "Response status should be 401");
        assert.isObject(res.body, "Should return an object");
        done();
      });
  });
});

suite("DELETE", function () {
  test("Delete an issue: DELETE request to /api/issues/{project}", function (done) {
    chai
      .request(server)
      .delete("/api/issues/apitest")
      .send({
        _id: "5871dda29faedc3491ff93bb",
      })
      .end(function (error, res) {
        assert.equal(res.status, 200, "Response status should be 200");
        assert.isObject(res.body, "Should return an object");
        done();
      });
  });

  test("Delete an issue with an invalid _id: DELETE request to /api/issues/{project}", function (done) {
    chai
      .request(server)
      .delete("/api/issues/apitest")
      .send({
        _id: "Wrong_Id",
      })
      .end(function (error, res) {
        assert.equal(res.status, 401, "Response status should be 401");
        assert.isObject(res.body, "Should return an object");
        done();
      });
  });

  test("Delete an issue with missing _id: DELETE request to /api/issues/{project}", function (done) {
    chai
      .request(server)
      .delete("/api/issues/apitest")
      .send()
      .end(function (error, res) {
        assert.equal(res.status, 401, "Response status should be 401");
        assert.isObject(res.body, "Should return an object");
        done();
      });
  });
});
