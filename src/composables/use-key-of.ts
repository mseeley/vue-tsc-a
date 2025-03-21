import { isRecord, isString } from 'typed-assert';
import {
  computed,
  toValue,
  type MaybeRefOrGetter,
  type ComputedRef,
} from 'vue';

export type KeyOf<T> = (item: T, index: number) => string;

export type KeyOfInput<T> = 'id' | 'index' | KeyOf<T>;

function keyOfId<T>(item: T, _index: number): string {
  isRecord(item, 'keyOfId: Record expected');
  isString(item.id, 'keyOfId: `id` string expected');
  return item.id;
}

function keyOfIndex(_item: unknown, index: number): string {
  return `${index}`;
}

export function useKeyOf<T = unknown>(
  input: MaybeRefOrGetter<{ keyOf?: KeyOfInput<T> }>
): ComputedRef<KeyOf<T>> {
  return computed(() => {
    const value = toValue(input);
    if (typeof value.keyOf === 'function') {
      return value.keyOf;
    } else if (value.keyOf === 'index') {
      return keyOfIndex;
    }
    return keyOfId;
  });
}
