// TODO : implement a connection to the external interface
// import { ApiProperty } from '@nestjs/swagger'
// import { IsString, IsNotEmpty } from 'class-validator'

export class SetPositiveFlagDto {
  // @ApiProperty()
  // @IsString()
  // @IsNotEmpty()
  // centerGeneratedCode: string // FIXME : give me a nice name
}

export class SetPositiveReportFlagDto {
  // Keys without any decorators are non-Whitelisted. Validator will throw error if it's passed in payload.
  userId: string
  organizationCode: string
}
