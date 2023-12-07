import './winnerPhotoNameBlock.css';
import { IWinnerData } from '../../interfaces/winnerData.ts';
import { Typography } from '@mui/material';

export default function WinnerPhotoNameBlock({ name, age, photo }: IWinnerData) {
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
