import './winnerPhotoNameBlock.css';
import { IWinnerData } from '../../interfaces/winnerData.ts';
import { Typography } from '@mui/material';
import {useTranslation} from "react-i18next";

export default function WinnerPhotoNameBlock({ name, age, photo }: IWinnerData) {
    const {t} = useTranslation();
    return (
        <div className="winner-photo-name-block">
            <Typography variant="h4">{name}</Typography>
            <Typography className="subtitle" variant="body1" color="primary">
                {t('age-info')}{age}
            </Typography>
            <img src={photo} alt={name} className="winner-photo" />
        </div>
    );
}
