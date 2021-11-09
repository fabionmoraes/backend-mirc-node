export class GoogleClientService {
  execute() {
    const googleClient = process.env.GOOGLE_CLIENT
    return googleClient
  }
}
