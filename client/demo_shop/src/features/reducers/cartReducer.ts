import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { AppState } from '../store';

export type CartType = {
    id: number;
    name: string;
    price: number;            // single price value
    type: 'Men' | 'Women';
};

export type CartItem = CartType & {
    qty: number;              // quantity in cart
};

type CartState = {
    items: CartItem[];
};

const initialState: CartState = { items: [] };

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (
            state,
            { payload }: PayloadAction<CartType & { qty?: number }>
        ) => {
            const qty = Math.max(1, payload.qty ?? 1);
            const existing = state.items.find((i) => i.id === payload.id);
            if (existing) {
                existing.qty += qty;
            } else {
                state.items.push({ ...payload, qty });
            }
        },
        updateQuantity: (state, { payload }: PayloadAction<{ id: number; qty: number }>) => {
            const it = state.items.find(i => i.id === payload.id);
            if (it) it.qty = payload.qty;
        },
        removeFromCart: (state, { payload }: PayloadAction<number>) => {
            state.items = state.items.filter(i => i.id !== payload);
        },
        clearCart: (state) => {
            state.items = [];
        },

        // Optional helper if you ever want to hydrate from storage
        setCart: (state, { payload }: PayloadAction<CartItem[]>) => {
            state.items = payload.map((i) => ({ ...i, qty: Math.max(1, i.qty) }));
        },
    },
});

// --------------- Exports -------------------
export const {
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    setCart,
} = cartSlice.actions;

// ---------------- Selectors ----------------
export const selectCart = (state: AppState) => state.cart.items;

export const selectCartCount = (state: AppState) =>
    state.cart.items.reduce((acc: any, i: any) => acc + i.qty, 0);

export const selectCartSubtotal = (state: AppState) =>
    state.cart.items.reduce((acc: any, i: any) => acc + i.qty * i.price, 0);

export const cartReducer = cartSlice.reducer;
export default cartReducer;


