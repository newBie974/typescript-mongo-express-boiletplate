import * as express from 'express';
import myInterfaces from '../interfaces/myController.interface';
import myControllerModel from '../models/myController.model';

export default class myControllerPost {
    private router = express.Router();
    private myControllerModel = myControllerModel;

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post('/mycontroller', this.create);
    }

    create = (request: express.Request, response: express.Response) => {
        const post: myInterfaces = request.body;
        const createData = new this.myControllerModel(post);
        createData.save()
          .then((res) => {
            response.send(res);
          })
          .catch((err) => {
            response.send(err);
          });
    }
}
