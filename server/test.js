//during the test the env var is set to test
process.env.NODE_ENV='test';
let db= require('./db');
let app= require('./index');
//require the dev dependencies
let chai= require('chai');
let chaiHttp= require('chai-http');
let should= chai.should();
const { expect}= chai;

chai.use(chaiHttp);

//parent block
describe('Todos',()=>{
    beforeEach((done)=>{//Before each test we empty the database
        db.remove({},(err)=>{
            done();
        });
    })

})
//test the get route
describe('/GET todos',(done)=>{
    chai
    .request(app)
    .get('/todos')
    .end((err,res)=>{
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.be.eql(2);
        done();
    })
})