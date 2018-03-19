// This file tells Steadicam which files have TypeScript driven props interfaces that have been converted to HTML.
import LoaderCircularAPI from '../data/tsdocsHTML/interfaces/_loadercircular_loadercircular_.loadercircularprops.html';
import ProgressBarAPI from '../data/tsdocsHTML/interfaces/_progressbar_progressbar_.progressbarprops.html';
import VideoCardAPI from '../data/tsdocsHTML/interfaces/_videocard_videocard_.videocardprops.html'

const tsPatternAPIList = {
    LoaderCircular: {
        data: LoaderCircularAPI,
    },
    ProgressBar: {
        data: ProgressBarAPI,
    },
    VideoCard: {
        data: VideoCardAPI,
    },
}


export default tsPatternAPIList;
