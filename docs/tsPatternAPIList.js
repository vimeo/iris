// This file tells Steadicam which files have TypeScript driven props interfaces that have been converted to HTML.
import ProgressBarAPI from '../data/tsdocsHTML/interfaces/_progressbar_progressbar_.progressbarprops.html';
import LoaderCircularAPI from '../data/tsdocsHTML/interfaces/_loadercircular_loadercircular_.loadercircularprops.html';

const tsPatternAPIList = {
    LoaderCircular: {
        data: LoaderCircularAPI,
    },
    ProgressBar: {
        data: ProgressBarAPI,
    }
}


export default tsPatternAPIList;