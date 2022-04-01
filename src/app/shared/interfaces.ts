import { CategoryType } from './enum';

export interface Product {
	id: number;
	name: string;
	category: CategoryType;
	imported: boolean;
	price: number;
}
