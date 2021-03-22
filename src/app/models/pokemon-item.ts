import { SlotType } from './slot-type';
import { Sprite } from './sprite';
import { Stat } from './stat';

export interface PokemonItem {
    sprites: Sprite;
    stats: Stat[];
    types: SlotType[];
}
