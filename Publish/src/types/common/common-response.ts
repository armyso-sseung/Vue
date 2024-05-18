import type { ErrorType } from '~/types/common/error'

export interface CommonResponse<T> extends ErrorType {
  res: T
}
