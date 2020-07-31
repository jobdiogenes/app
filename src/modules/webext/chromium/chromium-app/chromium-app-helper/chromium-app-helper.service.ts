import { Injectable } from 'angular-ts-decorators';
import { autobind } from 'core-decorators';
import Strings from '../../../../../../res/strings/en.json';
import { AppHelperService } from '../../../../app/app.interface';
import { PlatformType } from '../../../../shared/global-shared.enum';
import WebExtAppHelperService from '../../../webext-app/webext-app-helper/webext-app-helper.service';

@autobind
@Injectable('AppHelperService')
export default class ChromiumAppHelperService extends WebExtAppHelperService implements AppHelperService {
  platformName = PlatformType.Chromium;

  getHelpPages(): string[] {
    const pages = [
      this.platformSvc.getI18nString(Strings.help_Page_Welcome_Desktop_Content),
      this.platformSvc.getI18nString(Strings.help_Page_BeforeYouBegin_Chrome_Content),
      this.platformSvc.getI18nString(Strings.help_Page_FirstSync_Desktop_Content),
      this.platformSvc.getI18nString(Strings.help_Page_Service_Content),
      this.platformSvc.getI18nString(Strings.help_Page_SyncId_Content),
      this.platformSvc.getI18nString(Strings.help_Page_ExistingId_Desktop_Content),
      this.platformSvc.getI18nString(Strings.help_Page_Searching_Desktop_Content),
      this.platformSvc.getI18nString(Strings.help_Page_AddingBookmarks_Chrome_Content),
      this.platformSvc.getI18nString(Strings.help_Page_NativeFeatures_Chrome_Content),
      this.platformSvc.getI18nString(Strings.help_Page_BackingUp_Desktop_Content),
      this.platformSvc.getI18nString(Strings.help_Page_Shortcuts_Chrome_Content),
      this.platformSvc.getI18nString(Strings.help_Page_Mobile_Content),
      this.platformSvc.getI18nString(Strings.help_Page_FurtherSupport_Content)
    ];

    return pages;
  }
}