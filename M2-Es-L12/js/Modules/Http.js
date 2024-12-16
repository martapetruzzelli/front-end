var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class HttpClient {
    constructor() {
        this.headers = {
            'content-Type': 'application/json'
        };
    }
    get(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(url, {
                method: 'GET',
                headers: this.headers
            });
            if (!response.ok)
                throw new Error(`${response.status}`);
            return response.json();
        });
    }
    post(url, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(url, {
                method: 'POST',
                headers: this.headers,
                body: JSON.stringify(body)
            });
            if (!response.ok)
                throw new Error(`${response.status}`);
            return response.json();
        });
    }
    put(url, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(url, {
                method: 'PUT',
                headers: this.headers,
                body: JSON.stringify(body)
            });
            if (!response.ok)
                throw new Error(`${response.status}`);
            return response.json();
        });
    }
    delete(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(url, {
                method: 'GET',
                headers: this.headers
            });
            if (!response.ok)
                throw new Error(`${response.status}`);
            return response.json();
        });
    }
}
//# sourceMappingURL=Http.js.map