import {assert} from "chai";
import HTTPTransport from "../http.ts";
import sinon, { SinonStub} from "sinon";

describe('HTTP Transport:', () => {
    let http: HTTPTransport;
    let stubRequest: SinonStub;

    beforeEach(() => {
        http = new HTTPTransport();
        stubRequest=sinon.stub(http,'request').callsFake(()=>Promise.resolve())
    });

    it('get should GET request', () => {
        http.get('/url');
        assert(stubRequest.calledOnce);
        assert(stubRequest.calledWithMatch('/url'));
    });

    it('put should PUT request', () => {
        http.put('/url');
        assert(stubRequest.calledOnce);
        assert(stubRequest.calledWithMatch('/url'));
    });
    it('post should POST request', () => {
        http.post('/url');
        assert(stubRequest.calledOnce);
        assert(stubRequest.calledWithMatch('/url'));
    });
    it('delete should DELETE request', () => {
        http.delete('/url');
        assert(stubRequest.calledOnce);
        assert(stubRequest.calledWithMatch('/url'));
    });
});
