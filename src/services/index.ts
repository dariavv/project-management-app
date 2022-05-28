export { authService } from 'services/auth';
export { boardsService } from 'services/boards';
export { columnsService } from 'services/columns';
export { usersService } from 'services/users';
export { tasksService } from 'services/tasks';

import axios from 'axios';
import { authService } from 'services/auth';

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      authService.logOut();
      window.location.reload();
    }
    if (error.response.status === 404) {
      authService.logOut();
      window.location.reload();
    }
    return Promise.reject(error);
  },
);
