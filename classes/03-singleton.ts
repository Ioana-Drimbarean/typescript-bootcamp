
export class CoursesService {

    private static INSTANCE: CoursesService;

    protected constructor() {
        console.log(`The CoursesService was initialized.`);
    }

    static instance() {
        if (!CoursesService.INSTANCE) {
            CoursesService.INSTANCE = new CoursesService();
        }
        return CoursesService.INSTANCE;
    }

}
