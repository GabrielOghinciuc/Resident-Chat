import { Controller, Get, Route, Tags } from "tsoa";

@Route("health")
@Tags("Health")
export class HealthController extends Controller {
  @Get("/")
  public async check(): Promise<{ status: string }> {
    return { status: "ok" };
  }
}
