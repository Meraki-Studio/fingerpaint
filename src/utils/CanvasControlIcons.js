import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import {
    // viewNavigation
    faSearchPlus,
    faSearchMinus,
    faHandPaper,
    faEye,
    faEyeSlash,
    faIcons,
    // viewTools
    faPaintBrush,
    faPen,
    faEraser,
    faFillDrip,
    faFont,
    faStamp,
    faImage,
    faPalette,
    // viewManipulation
    faEdit,
    faUndo,
    faRedo,
    faSave,
    faTrashAlt,
    faCrop,
    // General
    faAngleDown,
    faAngleLeft,
    faAngleRight,
    faAngleUp,
    faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons';

export const CanvasControlIcons = () => {
    library.add(
        faSearchPlus,
        faSearchMinus,
        faHandPaper,
        faEye,
        faEyeSlash,
        faIcons,
        faPaintBrush,
        faPen,
        faEraser,
        faFillDrip,
        faFont,
        faStamp,
        faImage,
        faPalette,
        faEdit,
        faUndo,
        faRedo,
        faSave,
        faTrashAlt,
        faCrop,
        faAngleDown,
        faAngleLeft,
        faAngleRight,
        faAngleUp,
        faQuestionCircle,
        fab
    );
};
