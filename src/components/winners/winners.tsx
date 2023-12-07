import './winners.css'
import {IWinnerData} from "../../interfaces/winnerData.ts";
import WinnerCard from "../winnerCard/winnerCard.tsx";
import {useState} from "react";
import {Card, InputAdornment, TextField } from '@mui/material';
import {FaSearch} from "react-icons/fa";
import {useTranslation} from "react-i18next";

export default function Winners() {
    const {t} = useTranslation();
    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const winners : IWinnerData[] = t('winners', {returnObjects: true});

    const filteredWinners = winners.filter(
        (winner: IWinnerData) =>
            winner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            winner.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <div className="search-wrapper">
                <TextField className="search-input" variant="filled" label={t('search-input')} value={searchTerm} onChange={handleSearch}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <FaSearch/>
                            </InputAdornment>
                        ),
                    }}
                />
            </div>
            <div className={'winnersClass'}>
                {filteredWinners.map((winner: IWinnerData) => (
                    <Card className="winnerClass" sx={{ width: 0.475 }}>
                        <WinnerCard key={winner.id} {...winner}/>
                    </Card>
                ))}
            </div>
        </>
    );
}