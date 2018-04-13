// This file tells Steadicam which files have TypeScript driven props interfaces that have been converted to HTML.

import ButtonAPI from '../data/tsdocsHTML/interfaces/_button_button_.buttonprops.html';
import CategoryCardAPI from '../data/tsdocsHTML/interfaces/_categorycard_categorycard_.categorycardprops.html';
import LoaderCircularAPI from '../data/tsdocsHTML/interfaces/_loadercircular_loadercircular_.loadercircularprops.html';
import ModalFeatureUpdateAPI from '../data/tsdocsHTML/interfaces/_modalfeatureupdate_modalfeatureupdate_.modalfeatureupdateprops.html';
import ProgressBarAPI from '../data/tsdocsHTML/interfaces/_progressbar_progressbar_.progressbarprops.html';
import VideoCardAPI from '../data/tsdocsHTML/interfaces/_videocard_videocard_.videocardprops.html';

const tsPatternAPIList = {
    Button: {
        data: ButtonAPI,
    },
    CategoryCard: {
        data: CategoryCardAPI,
    },
    LoaderCircular: {
        data: LoaderCircularAPI,
    },
    ProgressBar: {
        data: ProgressBarAPI,
    },
    ModalFeatureUpdate: {
        data: ModalFeatureUpdateAPI,
    },
    VideoCard: {
        data: VideoCardAPI,
    },
};

export default tsPatternAPIList;
