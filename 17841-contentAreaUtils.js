   I   ¹   ºç¿s¹                m  È   ¹   '   Ë      $                   &             chrome://global/content/contentAreaUtils.js     ð«                                                 "   #                           $   %   &                                              !   "   #;    5   ¸   
=   : ;   ¸   
A=   =   : ;   ¸   
A=   =   	: ;   ¸   
A=   
=   : ;   ¸   
A=   =   : ;   ¸   
A=   =   : ;   ¸   
A=   =   : ;   ¸   
A=   =   : ;   ¸   
A=   =   : ;   ¸   
A=   =   : n   Y       a      a   o   Q;    5   5      Q;    5   5      Q;   Y      	]       
]   !6   >   "Q×   #Q>   $Q?   %Q×   &QÊ%	-	5	O	_Êb	  	  §	  ÑÊ 	 	 Ï	 Þ	 ó	 (	 	 ­	 ÓÊ Ý	 &	 :	 A	 F	 K	 R	 [	 a	 k	 w	 Î	 ÿ	 	 A	 Y	 k	ÚAÒMÒJÒ	PÒJÒGÒUÒHÒIÒEÊÊÐ%(-35;OY_Õ	Õb~  ¥  µÊÊ  ÃÐ  ÏÈ  d  Å Ï Þ ä ó  (     ­ ÏÈ Ý $ 8 ? P X i u Ì ý  ? W b k ®    Components   utils   importK   resource://gre/modules/XPCOMUtils.jsm   XPCOMUtils-   defineLazyModuleGetter   BrowserUtilsO   resource://gre/modules/BrowserUtils.jsm   DownloadsI   resource://gre/modules/Downloads.jsm   DownloadLastDirU   resource://gre/modules/DownloadLastDir.jsm   FileUtilsI   resource://gre/modules/FileUtils.jsm   OSC   resource://gre/modules/osfile.jsm)   PrivateBrowsingUtils_   resource://gre/modules/PrivateBrowsingUtils.jsm   PromiseE   resource://gre/modules/Promise.jsm   ServicesG   resource://gre/modules/Services.jsm	   Task?   resource://gre/modules/Task.jsm!   ContentAreaUtils   ioService   stringBundle   imgICache   interfaces%   nsISupportsCString!   DownloadListener   prototype   QueryInterface   getInterface)   kSaveAsType_Complete!   kSaveAsType_Text#   SAVEMODE_FILEONLY+   SAVEMODE_COMPLETE_DOM-   SAVEMODE_COMPLETE_TEXT   ÿÿÿÿ   5   ContentAreaUtils.ioServiceÁ                          ¹                                              ·               ;    5   Ë    Services   io   ÿÿÿÿ   ;   ContentAreaUtils.stringBundleÁ                   (       ¹                                            Ì  o               A%    QA;   5   ¸   
=   : 6    ÖÉW    stringBundle   Services   strings   createBundlek   chrome://global/locale/contentAreaCommands.properties   ÿÿÿÿ   !   urlSecurityCheck                        ¹      
                                     	   aURL   aPrincipal   aFlags     ì  %             ;    ¸   
T  T T : Õ8    BrowserUtils!   urlSecurityCheck   ÿÿÿÿ      isContentFrame                         ¹                                              aFocusedWindow \  Ë  -             T      BT  5    ;   5   2Ô.    top   window   content   ÿÿÿÿ      forbidCPOW                 k       ¹   	                                            arg	   func   argname   à  Ä  5             T  E   =QT  '=    D   QT  '=   E   Q;   5   ¸   
T  :    *;   =   T ä=   T ä=   R pÉÐÐÔË1ËËÿÿÿÇA    object   function   Components   utils+   isCrossProcessWrapper   Error=   no CPOWs allowed for argument 	    to       ÿÿÿÿ      saveURL                 _       ¹                                           	   aURL   aFileName'   aFilePickerTitleKey%   aShouldBypassCache   aSkipPrompt   aReferrer   aSourceDocument       Ä  m  O             ;    â    T  =   =   : Q;    â    T =   =   : Q;   â   T  @T @@T T @T T T @: QQÛÛVÖÊVX"    forbidCPOW   saveURL	   aURL   aReferrer   internalSave   ÿÿÿÿ      saveImageURL              A      ¹      g                                  	   aURL   aFileName'   aFilePickerTitleKey%   aShouldBypassCache   aSkipPrompt   aReferrer	   aDoc   contentType%   contentDisposition   imageCache   props       ±  @  b             ;    â    T  =   =   : Q;    â    T =   =   : Q@W   Q@W  QT     Ì;   5   5   ¸   
;   5   5   	: ¸   

T : W  QV  ¸   
;   â   T  ;   â   @: : : W  QV     ?V  ¸   
=   ;   : W   QV  ¸   
=   ;   : W  Q     Qv  QÈ    ;   â   T  @T V  V   T T @T T T @: QdÛÛi  ¯
ÖÏmÊomÈp
ã5ÿÿÿòÿÿÿáÈÕÈÐtÍwÓ{ÙÊ{}(    forbidCPOW   saveImageURL	   aURL   aReferrer   Components   classes5   @mozilla.org/image/tools;1   getService   interfaces   imgITools-   getImgCacheForDocument'   findEntryProperties   makeURI#   getCharsetforSave   get	   type%   nsISupportsCString'   content-disposition   internalSave    ÿÿÿÿ         e         L   ³             ÿÿÿÿ   ÿÿÿÿ      saveDocument              m      ¹      ~                        $             aDocument   aSkipPrompt   ifreq%   contentDisposition   cacheKey  W  +               T      =    pT  5   ¸   
;   5   5   : W   Q@W  QV   ¸   
;   5   5   : ¸   
=   	: W  Q     Qv  QÈ    @W  QV   ¸   
;   5   5   
: ¸   
;   5   5   : W  Q     Qv  QÈ    V  E   Q;   5   ¸   
V  :    @W  Q;   â   T  5   5   T  @V  T  5   B@@T  5      ;   â   T  5   :    @T  T V  : QÏÏ  È2ÚÊ  ÍÓ<ÚÊÏ  ÍÓßßËÈ×$ÉÊ  ¡1 ]   Must have a document when calling saveDocument   defaultView   QueryInterface   Components   interfaces+   nsIInterfaceRequestor   getInterface#   nsIDOMWindowUtils'   getDocumentMetadata'   content-disposition!   nsIWebNavigation)   nsIWebPageDescriptor   utils+   isCrossProcessWrapper   internalSave   location	   href   contentType   referrer   makeURI    ÿÿÿÿ         ex        ÿÿÿÿ         ex            @        <   6       s      ÿÿÿÿ   Í      ÿÿÿÿ   ÿÿÿÿ   !   DownloadListener               U       ¹      &                               @      win   transfer   makeClosure   i F  z  §       	          W   QAT  6    Q   K   ,mW  V  =      AV  V   V  : 8QãQLMÿÿÿÔQNÊ  §  ®ÊÈ01ÊÊÎ
Ñ    window   QueryInterface   ÿÿÿÿ      makeClosure                        ¹                                        @   	   namen  É  ¨                     ÿÿÿÿ   =   DownloadListener/makeClosure/<Á                 &      ¹                                              arguments  Å  ©             	W   Q     7¸    
  V   O Qß*    apply   !   2      ÿÿÿÿ      dl_qi                        ¹   	                                         	   aIID »    ¸             T  ¸    
;   5   5   : D   fQT  ¸    
;   5   5   : D   DQT  ¸    
;   5   5   : D   "QT  ¸    
;   5   5   :    A;   5   5   pÙÉÙÉÙÉÙÐ/    equals   Components   interfaces+   nsIInterfaceRequestor-   nsIWebProgressListener/   nsIWebProgressListener2   nsISupports   results+   NS_ERROR_NO_INTERFACE   ÿÿÿÿ      dl_gi                      ¹      *                                     	   aIID   ww @  Ì  Ã             T  ¸    
;   5   5   : D   "QT  ¸    
;   5   5   :    J;   5   5   ¸   
;   5   5   : W   QV   ¸   	
A5   
T  : ;   5   5   pÙÉÙ
ÖÏ  ÈÈÔÐ/    equals   Components   interfaces   nsIAuthPrompt   nsIAuthPrompt2   classesO   @mozilla.org/embedcomp/window-watcher;1   getService!   nsIPromptFactory   getPrompt   window   results+   NS_ERROR_NO_INTERFACE   ÿÿÿÿ      internalSave                    ¹      ¸                         1      @   	   aURL   aDocument!   aDefaultFileName'   aContentDisposition   aContentType%   aShouldBypassCache'   aFilePickerTitleKey   aChosenData   aReferrer'   aInitiatingDocument   aSkipPrompt   aCacheKey   saveMode	   file   sourceURI   saveAsType   charset   fileInfo   fpParams   continueSave       @'  "4                     Q;    â    T  =   =   : Q;    â       =   =   : Q;    â       =   =   : QT 
;      
BU 
Q   ;      @   Q;   â   T    :    Q   Q   	Q   
QT    ;T 5      QT 5      	Q;   	   
Q   :  Q  (  Q@W   Q         5   
W   Q            5   W   Q;   T R W  Q;   â   V  T  V      T T : QV  5      	QY   T ]   V  ]   T ]      ]   ;   	]      ]      Q   D   Q   	  Q;   â      T 
V  : ¸   
A   : ¸   
@;   5   5   : QÈ KË ÛÝÝÉËÒÉ6ÎÎËÏÔÏÉÈÚ 0ÏÈÉÈÊÊÐÕð HÐ @ K c    forbidCPOW   internalSave	   aURL   aReferrer   aCacheKey   undefined3   GetSaveModeForContentType	   file   uri)   kSaveAsType_Complete   characterSet   originCharset   FileInfo   initFileInfo   fpTitleKey   fileInfo   contentType   saveMode   saveAsType#   promiseTargetFile	   then   Components   utils   reportError   ÿÿÿÿ      continueSave                       ¹      I                                         useSaveDocument   persistArgs/   4  K               E   DQ   ;    E   Q   
;   D   "Q   ;   E   Q   
;   W   QY      	]      ]   V            @]      
;      =      @]      ]   	   ]   
      ;   â      :    @]      ]      5   ]   W  Q;   â   V  : QËâáÊÊ
ÕË
ÕÊÊÔ ÎÊÔÒ +   SAVEMODE_COMPLETE_DOM)   kSaveAsType_Complete-   SAVEMODE_COMPLETE_TEXT!   kSaveAsType_Text   sourceURI   sourceReferrer   sourceDocument   text/plain#   targetContentType   targetFile   sourceCacheKey   getPostData   sourcePostData   bypassCache   defaultView!   initiatingWindow   internalPersist    ÿÿÿÿ         relatedURI                internalSave/<Å                 6       ¹                                              aDialogAccepted .  À.  @            T         5       
Q   5      Q   :  Q
ÐÐÊ    saveAsType	   file   ö   "  ÿÿÿÿ   ÿÿÿÿ      internalPersist            Î      ¹   /   â                         @             persistArgs   persist   targetFileURL   tr   filesFolder)   nameWithoutExtension'   filesFolderLeafName   encodingFlags   nsIWBP   flags   isPrivate :  ¼D              ;    â    :  W   Q;   5   5     QV  5   V  5     QT  5      "V   V  V  5   6   Q   V   V  V  5   	6   QV   5   V  5   
6   Q;   â   T  5   : W  Q;   ¸   
T  5   :   	Q;   5   5   ¸   
;   5   5   : W  QV  ¸   
T  5   V  =   @@@V   V  	: QV   ;   ;   V  R 6   QT  5     5  
Q@W  QT  5   =      pT  5   ¸   
:  W  Q;   â   V  5   : W  Q;    5   !¸   "
=   #Z  V  `   ?: W  QV  V  6   Q>W  QT  5   =      CV  V  5   $W  QV  V  5   %W  QV  V  5   &W  Q   V  V  5   'W  Q×P  
QV   ¸   (
T  5   V  V  T  5   V  V  
: QÈ   QV   ¸   )
T  5   T  5   *T  5   +;   5   5   ,5   -T  5   .@V  V  	: QÊ
ÈÔÉÏÈÝØÓxÒÈÔÈåÈÓÔ ÓÉÈ 0ËÎÏÈ
ÓÈ
ÑÉ>É ¨ÈÎÎ>ÍxÍxÍxËÍx
ÛÐ ¹ÊÓÈÈÔÈ ¼ Ã+ +   makeWebBrowserPersist   Components   interfaces)   nsIWebBrowserPersistI   PERSIST_FLAGS_REPLACE_EXISTING_FILESC   PERSIST_FLAGS_FORCE_ALLOW_COOKIES   bypassCache   persistFlags5   PERSIST_FLAGS_BYPASS_CACHE1   PERSIST_FLAGS_FROM_CACHES   PERSIST_FLAGS_AUTODETECT_APPLY_CONVERSION   makeFileURI   targetFile)   PrivateBrowsingUtils-   isContentWindowPrivate!   initiatingWindow   classes/   @mozilla.org/transfer;1   createInstance   nsITransfer	   init   sourceURI   !   progressListener!   DownloadListener   window   sourceDocument#   targetContentType   text/plain   clone   getFileBaseName   leafName!   ContentAreaUtils   stringBundle)   formatStringFromName   filesFolder-   ENCODE_FLAGS_FORMATTED7   ENCODE_FLAGS_ABSOLUTE_LINKS;   ENCODE_FLAGS_NOFRAMES_CONTENTE   ENCODE_FLAGS_ENCODE_BASIC_ENTITIES   saveDocument'   savePrivacyAwareURI   sourceCacheKey   sourceReferrer   nsIHttpChannelU   REFERRER_POLICY_NO_REFERRER_WHEN_DOWNGRADE   sourcePostData    ÿÿÿÿ   
      kWrapColumn       R  *  ÿÿÿÿ   ÿÿÿÿ      AutoChosen                        ¹                                               aFileAutoChosen   aUriAutoChosen  bF  ÄF  Ï            AT  6    QAT 6   QÊÊ 	   file   uri   ÿÿÿÿ      FileInfo                 3       ¹                                            %   aSuggestedFileName   aFileName   aFileBaseName   aFileExt	   aUri     ÄH  ¥I  Þ            AT  6    QAT 6   QAT 6   QAT 6   QAT 6   QÊÊÊÊÊ #   suggestedFileName   fileName   fileBaseName   fileExt   uri   ÿÿÿÿ      initFileInfo              f      ¹      c                                    aFI	   aURL   aURLCharset   aDocument   aContentType'   aContentDisposition   url      L  Q  ó            T  ;   â   T T : 6    QT  5    ¸   
;   5   5   : W   QT  V   5   6   Q     Qv  QÈ    T  ;   	â   	T  5   
D   QT  5   T  5    T T : 6   QT  5    E   ,QT  E   "QT  E   Q     ¸   
T :    )T  =   6   QT  T  5   6   Q   LT  ;   â   T  5   T  5    T : 6   QT  ;   â   T  5   : 6   Q     Qv  QÈ     MUÓ
É
ÞÈ×ÓãÎ É ÏÊÙ$ÎÖàÉÕÎÓ    uri   makeURI   QueryInterface   Components   interfaces   nsIURL   fileExt   fileExtension   fileName%   getDefaultFileName#   suggestedFileName	   test   htm   fileBaseName'   getDefaultExtension   getFileBaseName    ÿÿÿÿ         e        ÿÿÿÿ         e       ^http(s?):\/\/           Q          Y       \      ÿÿÿÿ   S     ÿÿÿÿ   ÿÿÿÿ   #   promiseTargetFile                        ¹                                      @   	   aFpP   aSkipPrompt   aRelatedURI£U  Jb  (            ;    ¸   
    : Ñ  	   Task   spawn   ÿÿÿÿ   '   promiseTargetFile/<Á                       ¹   C   O                      ¹             .generator   downloadLastDir   prefBranch   useDownloadDir   dirPath   dirExists   dir   deferred	   file   fp   titleKey   deferComplete   result V  Fb  *      	      É   Ê   ÐQ;    ;   R    Q;   5   ¸   
=   :    Q   ¸   
=   :    Q      B   Q;   ¸   	
:     Ë  Ð   Q;   
5   ¸   
   :    Ë  Ð   Q;   5      R    Q   E   Q      m   ¸   
;   â     5   5     5   5   : : Q  ;   â      : 6   Q;   5   CR p;   ¸   
:     	Q      =;   5   5   ¸   
    ;   5   5   5   : Q      ¸    
     : Q   	5   !   Ë  Ð   
Q   
E   .Q;   
5   ¸   
   
5   ":    Ë  Ð      
   QC   Q       3;   5   #¸   $
=   %;   5   5   &:    Q;   'â   ':     Q  5   (D   Q=   )   Q   ¸   *
;   ;   +5   ,¸   -
   : ;   5   5   .5   /: Q      6   0Q     5   5   6   1Q   ;   â     5   5     5   5   : 6   2Q;   3â   3     5   4  5   5     5   5: Q  5   5;   6   E      ¸   8
=   9: 6   7Q    Æ      Qv   QÈÇ    ;   ¸   
:     Q   ¸   :
   : Q   5   !   Ë  Ð   Q   ;   5   5   .5   ;D   Q   5       ;   5   BR p  5   5;   6   $   ¸   <
=   9   5   7: Q   ¸   =
     5   5   >: Q   5   ;   @â   @   5   5   ?: 6   ?Q     5   76   AQ     5   6   Q     5   B6   BQ;   5   CR p   Ì  *ÌËÉÖÉÑÉÌÓÖÓÐÉÐåÏ 9ÿÿÿõÔÉÌ AÌÉ8ÛÔ DÉÚÚæÍËåÉÊÉÛçÔ YÐÚÞÏ ^ÉèÊ ` eÐ ÖÎÛÌÉÕÚàFËÌÐßäãÉÕÕÕÌ    DownloadLastDir   window   Services   prefs   getBranch#   browser.download.   getBoolPref   useDownloadDir   Downloads=   getPreferredDownloadsDirectory   OS	   File   exists   FileUtils   append+   getNormalizedLeafName   fileInfo   fileName   fileExt	   file   uniqueFile	   Task   Result   Promise   defer   tm   mainThread   dispatch   Components   interfaces   nsIThread   DISPATCH_NORMAL   getFileAsync   promise	   path   dirsvc   get	   Desk   nsIFile   makeFilePicker   fpTitleKey   SaveLinkTitle	   init!   ContentAreaUtils   stringBundle#   GetStringFromName   nsIFilePicker   modeSave!   displayDirectory!   defaultExtension   defaultString7   appendFiltersForContentType   contentType   saveMode#   SAVEMODE_FILEONLY   filterIndex   getIntPref)   save_converter_index	   open   returnCancel   setIntPref   setFile   parent   leafName!   validateFileName   saveAsType   fileURL   ÿÿÿÿ   +   promiseTargetFile/</<Á                          ¹                                            õY  !Z  D               	¸    
@: QÑ    resolve   ÿÿÿÿ      getFileAsyncCB                        ¹                                              aFile ©Z  ÛZ  H               	¸    
T  : QÓ    resolve    ÿÿÿÿ          e      ÿÿÿÿ   +   promiseTargetFile/</<Á                        ¹                                              aResult _  Õ_  n                  ¸    
T  : QØ    resolve     s  $           ÿÿÿÿ
      ¬   Í    ï     ÿÿÿÿ      uniqueFile               à       ¹      L                                      aLocalFile   collisionCount Úc  Ëf              >W   Q   ÁmV   #?W   QQV   ?   uT  5    ¸   
     :    /T  T  5    ¸   
    =   : 6    Q   *T  T  5    ¸   
    =   : 6    Q   7T  T  5    ¸   
    =   V   ?=   : 6    QãT  ¸   
:  ÿÿÿ5T  (  Ð ÎpÔ
*ÜÎÜÎéÉ 	Ô     leafName   match   replace   (2)$&   $1   )   exists3   \.[^\.]{1,3}\.(gz|bz2|Z)$   3   \.[^\.]{1,3}\.(gz|bz2|Z)$      (\.[^\.]*)?$       ^(.*\()\d+\)           Ð      ÿÿÿÿ      DownloadURL                Û       ¹      ]                          !      @   	   aURL   aFileName'   aInitiatingDocument   isPrivate   fileInfo!   filepickerParams  h  èm  ­            T 5    ¸   
;   5   5   : ¸   
;   5   5   : ¸   
;   5   5   : 5      Q;   	T R    Q;   
â   
      @@@@: QY      ]   ;   ]      Q;   ¸   
    : ¸   
@;   5   5   : QÏÏ °ÊÏ °ÊÏ °Î ¶ÉÉÜÊÐÛ ÎÐ ¾ Î.    defaultView   QueryInterface   Components   interfaces+   nsIInterfaceRequestor   getInterface!   nsIWebNavigation   nsILoadContext%   usePrivateBrowsing   FileInfo   initFileInfo   fileInfo#   SAVEMODE_FILEONLY   saveMode	   Task   spawn	   then   utils   reportError   ÿÿÿÿ      DownloadURL/<Á                       ¹      Y                          #             .generator   .genrval   accepted	   file   download	   listk  »m  ¾      	      É   Ê   ÐQY   ;    â        C    5   : ]   B]      Ë  Ð   Q       Y   ]   C]      Ì    5      QY   ;   ¸   
Y   Y     ]       ]   ]   	Y      5   
]   
   5   
=   ]   ]   : ]   B]      Ë  Ð   Q   C6   Q   ¸   
:  QY   ;   ¸   
;   5   : ]   B]      Ë  Ð   Q   ¸   
   : QY   ]   C]      Ì Í ¾ÌéÞØÕÖ
ÊÔ
ÏÚ ÄÎÐÌÐÛÞÕ #   promiseTargetFile   uri   value	   done	   file   Downloads   createDownload   url   isPrivate   source	   path   .part   partFilePath   target)   tryToKeepPartialData   start   getList   ALL   add
   L   	  ^     ÿÿÿÿ   7   appendFiltersForContentType               Q      ¹   %   ô                          '             aFilePicker   aContentType   aFileExtension   aSaveMode   bundleName   filterString   mimeInfo   extEnumerator   extString   extension    p  py  Ý            V   QV  QT ;       ¤T x=   y   2=   y   A=   y   P=   y   _=   y   Uz   i=   W   Q=   W  Q   P=   W   Q=   	W  Q   7=   
W   Q=   W  Q   =   W   Q=   W  Q   V       ßT ;       =   T =   p;   â   T T : W  QV      V  ¸   
:  W  Q=   W  Q   EmV  ¸   
:  W  QV     V  =   W  QV  =   V  W  QãV  ¸   
:  ÿÿÿ°V      T  ¸   
V  5   V  : QT ;      ZT  ¸   
;   5   ¸   
=   : V  : QT  ¸   
;   5   ¸   
V   : V  : QT ;      'T  ¸   
;    5   !5   "5   #: QT  ¸   
;    5   !5   "5   $: QÉk  u
 íu
 òu
 ÷u
uÊ èÊÊXÊÊXÊÊXÊÊXÉÐÐÈ
ËÈ
Ê(U 	ËÈ
ÉxÎx 	Õ ÛÉà ß ÉââI #   SAVEMODE_FILEONLY   text/html+   application/xhtml+xml   image/svg+xml   text/xml   application/xml+   WebPageHTMLOnlyFilter   *.htm; *.html-   WebPageXHTMLOnlyFilter   *.xht; *.xhtml)   WebPageSVGOnlyFilter   *.svg; *.svgz)   WebPageXMLOnlyFilter   *.xml9   Invalid save mode for type '   '%   getMIMEInfoForType#   getFileExtensions      getNext   ;    *.   hasMore   appendFilter   description+   SAVEMODE_COMPLETE_DOM!   ContentAreaUtils   stringBundle#   GetStringFromName+   WebPageCompleteFilter-   SAVEMODE_COMPLETE_TEXT   appendFilters   Components   interfaces   nsIFilePicker   filterText   filterAll    "  U      ÿÿÿÿ      getPostData                     ¹      P                                     aDocument'   sessionHistoryEntry y  8|  &            T  5    ¸   
;   5   5   : ¸   
;   5   5   : ¸   
;   5   5   : 5   ¸   
;   5   5   	: W   QV   5   
     Qv  QÈ    @  ÏÏ -ÊÏ -ÊÏ -Ï 2Ï -È 3ÏÓ    defaultView   QueryInterface   Components   interfaces+   nsIInterfaceRequestor   getInterface!   nsIWebNavigation)   nsIWebPageDescriptor#   currentDescriptor   nsISHEntry   postData    ÿÿÿÿ         e                         ÿÿÿÿ   ÿÿÿÿ   +   makeWebBrowserPersist                 =       ¹                                            #   persistContractID   persistIIDX|  >}  :            =       Q;   5   5     Q;   5   V   7¸   
V  : ÊÔÚA i   @mozilla.org/embedding/browser/nsWebBrowserPersist;1   Components   interfaces)   nsIWebBrowserPersist   classes   createInstance   ÿÿÿÿ      makeURI                        ¹      
                                     	   aURL   aOriginCharset   aBaseURI   P}  ³}  A            ;    ¸   
T  T T : Õ5    BrowserUtils   makeURI   ÿÿÿÿ      makeFileURI                        ¹      
                                        aFile É}  þ}  F            ;    ¸   
T  : Ï     BrowserUtils   makeFileURI   ÿÿÿÿ      makeFilePicker                 =       ¹                                               fpContractID   fpIID~  Ç~  K            =       Q;   5   5     Q;   5   V   7¸   
V  : ÊÔÚ7 3   @mozilla.org/filepicker;1   Components   interfaces   nsIFilePicker   classes   createInstance   ÿÿÿÿ      getMIMEService                 F       ¹                                            #   mimeSvcContractID   mimeSvcIID   mimeSvcà~  ¶  R            =       Q;   5   5     Q;   5   V   7¸   
V  :   QV  ÊÔÚ
È '   @mozilla.org/mime;1   Components   interfaces   nsIMIMEService   classes   getService   ÿÿÿÿ      getFileBaseName                        ¹                                             aFileName     [            T  ¸    
     =   : Ô"    replace      \.[^.]*$       ÿÿÿÿ   #   getMIMETypeForURI                7       ¹                                        	   aURI     a            ;    â    :  ¸   
T  :       Qv   QÈ    @ÊÖÓ    getMIMEService   getTypeFromURI    ÿÿÿÿ          e                    "      ÿÿÿÿ   ÿÿÿÿ   %   getMIMEInfoForType                K       ¹                                           aMIMEType   aExtension  $  ç  k            T  D   	QT    <;    â    :  ¸   
T  T :       Qv   QÈ    @ÌÊÙÓ    getMIMEService/   getFromTypeAndExtension    ÿÿÿÿ          e            #       6      ÿÿÿÿ   ÿÿÿÿ   %   getDefaultFileName            C      ¹   &   ú                	       7          !   aDefaultFileName	   aURI   aDocument'   aContentDisposition   dummy   charset   fileName   url   textToSubURI	   path   docTitle      Æ  w            T     	Q  Q  Q=      Q;   5   5     Q;   5   V  7¸   
V  :   	QY   @]   W   Q;   â   T : W  Q@W  QV  	¸   
T =   	V  CV   : W  Q   U  
Qv  
QV  	¸   
T =   
V  CV   : W  Q     Qv  QÈ    È    V     V  ÈÈ  QT    ;   â   T 5   : ¸   
:  W  QV     o  QT 5     QV  =   D   @QV  =   D   0QV  =   D    QV  =   D   QV  =      V  ÈÈT ¸   
;   5   5   : W  QV  5   =      k;   5   5   ¸   
;   5   5   : W  Q;   â   V  ¸   
V  5   D   Q=   V  5   : :      Qv  QÈ    V     
V  T     ;   â   T  : T 5   ¸   
     : W  QV  E   QV  Ù   ?   ;   â   V  ?7: T 5       T 5         Qv  QÈ    ;   !5   "¸   #
=   $:      Qv  QÈ    =   %×
Ê
Ô
ÚÈ
ËÍ
È%× ÍÌ%Ø ÍÚÈÒÒË
ÍÐÐÐÐÊÈ ¤  ÙÈÏ
ÖÏ ¨ÈòÿÿÿïÉÓÍÔÈÕÐÈÎÓÖÉÓ I   @mozilla.org/network/mime-hdrparam;1   Components   interfaces%   nsIMIMEHeaderParam   classes   getService   value#   getCharsetforSave   getParameter   filename	   name!   validateFileName   title	   trim   contentType+   application/xhtml+xml   application/xml   image/svg+xml   text/html   text/xml   QueryInterface   nsIURL   fileName   A   @mozilla.org/intl/texttosuburi;1   nsITextToSubURI!   unEscapeURIForUI   originCharset   UTF-8	   path   match   length	   host!   ContentAreaUtils   stringBundle#   GetStringFromName'   DefaultSaveFileName   index    ÿÿÿÿ         mhpContractID      mhpIID      mhp              
      e                    e        ÿÿÿÿ         contentType        ÿÿÿÿ         e        ÿÿÿÿ         e        ÿÿÿÿ         e       \/([^\/]+)\/$         
          Û          ¶              )        ¼   )            ÿÿÿÿ   °   I          æ         ÿÿÿÿ            L  i   ÿÿÿÿÿÿÿÿ³           W     ÿÿÿÿ   ÷     ÿÿÿÿ   *     ÿÿÿÿ   ÿÿÿÿ   !   validateFileName                    ¹      ½                       ,             aFileName   re   processed   i   original   suffix á  ê  Î                 W   Q;    5   ¸   
=   : ×ÿ       W   QT  ¸   
    =   : U  QT  ¸   
    =   : U  QT  ¸   
    =   : U  QT  ¸   
    =   : U  Q  Ç;    5   ¸   
=   	: ×ÿ       W   Q  ;    5   ¸   
=   
: ×ÿ  v  Q=     Q=   W  Q>W  Q   hmV  T  ¸   
V  : × E   QV  ¸   
T  V  7: >    T  V  7   
=   W  QV  #?W  QQãV  T  Ù   ÿÿÿV  ¸   
:  W  QV  ¸   
    =   : Ù   V  Ù   ×   V  W  Q=   W  QV  ¸   
=   : >   cV  ¸   
=   : ¸   
×ÿ: >7W  QV  E   QV  ¸   
=   : >   V  =   V  W  QV  ÈÈT  ¸   
V   =   : ÊÖ{ÊÔÔÔÔÌÖÏÖË
ÊÊ	%hZwÓÌÓÒ} à*Î ã àÔ æËÈÕÕ ï
ÉÊÐ
Ð	ÖÚ
ÎxÈÓ    navigator   appVersion   indexOf   Windows   replace   '       (   )   Macintosh   Android   *?<>|":/\[];,+=      charCodeAt   _   length	   trim   download   .   split   slice    ÿÿÿÿ         dangerousChars      [\/]+      [\\\/\|]+      [\"]+      [\*\:\?]+      [\<]+      [\>]+      [\:\/]+      _         w       ø   p  ÿÿÿÿÿÿÿÿf            ÿÿÿÿ   +   getNormalizedLeafName                      ¹      3                                       aFile#   aDefaultExtension   i  
  ±  ÿ            T     	T  T  ¸    
     =   : U  QT  ¸    
    =   : U  QT  ¸   
=   : W   QT  ¸   
V   ?: T    T  =   T T  ÔÔÏÈÐÎ    replace      lastIndexOf   .   substr   [\s.]+$    	   ^\.+       ÿÿÿÿ   '   getDefaultExtension                  ¹      n                                     aFilename	   aURI   aContentType   url   ext   mimeInfo   urlext!   stdURLContractID   stdURLIID   Ï  Â              T =    D   #QT =   D   QT 5   =      =   =     Q;   5   5     Q;   5   	V  7¸   

V  : W   QV   T  6   QV   5   W  Q;   â   T V  : W  QV  E   "QV  E   QV  ¸   
V  :    
V  V  QT ¸   
;   5   5   : W   QV   5   W  Q     Qv  QÈ    V  E   "QV  E   QV  ¸   
V  :    V     @V     V  5        Qv  QÈ    V  D   
QV  ìÊÔÚÈÍÎ $ÑÈã0ÙÈÓÓã
ÊÏÓÏ    text/plain1   application/octet-stream   scheme   ftp   G   @mozilla.org/network/standard-url;1   Components   interfaces   nsIURL   classes   createInstance   filePath   fileExtension%   getMIMEInfoForType   extensionExists   QueryInterface!   primaryExtension    ÿÿÿÿ         e        ÿÿÿÿ         e         ^          á   4            ÿÿÿÿ   w     ÿÿÿÿ   ÿÿÿÿ   3   GetSaveModeForContentType                      ¹      G                                        aContentType   aDocument   saveMode  æ  s  A            T  D   Q;    5   ¸   
T :    ;   ;   W   QT  x=   y   2=   y   (=   y   =   y   #=   y   z   (V   ;   	W   QV   ;   
W   Q   V   ÞÊk[u
u
u
u
uÊ KÉxÉxX    Components   utils+   isCrossProcessWrapper#   SAVEMODE_FILEONLY   text/html+   application/xhtml+xml   image/svg+xml   text/xml   application/xml-   SAVEMODE_COMPLETE_TEXT+   SAVEMODE_COMPLETE_DOM   ÿÿÿÿ   #   getCharsetforSave                 U       ¹                                              aDocument   ~  Y            T     T  5    ;   5   5      ;   5   5   5   5    ;   5   5   5    ÉÏÚÕ,    characterSet   document#   commandDispatcher   focusedWindow   window   content   ÿÿÿÿ      openURL       	        .      ¹   ,   Ç                          ?          	   aURL   uri   protocolSvc   recentWindow   loadgroup   appstartup   loadListener   uriListener   channel   uriLoader    ï«  k            ;    â    T  : W   Q;   5   5   ¸   
;   5   5   : W  QV  ¸   
V   5   :     V  ¸   	
V   : Q  »;   
5   ¸   
=   : W  QV     $V  ¸   
V   5   =   : Q;   5   5   ¸   
;   5   5   :    Q;   
5      QY       ]      ]      ]   W  Q   V  6   QY      ]      ]      ]      ]   @]   @]      ]   W  Q;   
5    ¸   !
V   @;   
5   "¸   #
:  @;   5   5   $5   %;   5   5   &5   ': W  Q;   5   5   (¸   
;   5   5   ): W  QV  ¸   *
V  ;   5   5   )5   +V  : QÍÈÖÏ oÈÔØÖÈÝÖÏ }ÉÐÊÊÏ ÏÊÊÊÊÏ ¢ÕÑ1ÔÔ ¢È ¨ÖÏ ¨ÈÏÔ ª#    makeURI   Components   classese   @mozilla.org/uriloader/external-protocol-service;1   getService   interfaces5   nsIExternalProtocolService#   isExposedProtocol   scheme   loadUrl   Services   wm'   getMostRecentWindow#   navigator:browser   openUILinkIn	   spec   tabC   @mozilla.org/network/load-group;1   createInstance   nsILoadGroup   startup   onStartRequest   onStopRequest   QueryInterface   groupObserver   onStartURIOpen   doContent   isPreferred!   canHandleContent   loadCookie+   parentContentListener   getInterface   io%   newChannelFromURI2+   scriptSecurityManager%   getSystemPrincipal   nsILoadInfo   SEC_NORMAL!   nsIContentPolicy   TYPE_OTHER1   @mozilla.org/uriloader;1   nsIURILoader   openURI)   IS_CONTENT_PREFERRED   ÿÿÿÿ      ll_start                        ¹                                              aRequest   aContext  Ü£  3¤                 ¸    
:  QÐ0 E   enterLastWindowClosingSurvivalArea   ÿÿÿÿ      ll_stop                        ¹                                              aRequest   aContext   aStatusCode   Z¤  ½¤                 ¸    
:  QÐ/ C   exitLastWindowClosingSurvivalArea   ÿÿÿÿ      ll_QI                 x       ¹                                              iid ã¤  
¦              T  ¸    
;   5   5   : D   DQT  ¸    
;   5   5   : D   "QT  ¸    
;   5   5   :    A;   5   5   pÙÉÙÉÙ
Ð/    equals   Components   interfaces   nsISupports%   nsIRequestObserver1   nsISupportsWeakReference   results+   NS_ERROR_NO_INTERFACE   ÿÿÿÿ   E   openURL/uriListener.onStartURIOpenÁ                        ¹                                                uri t¦  ¦              B&    ÿÿÿÿ   ;   openURL/uriListener.doContentÁ                        ¹                                                ctype   preferred   request   handler    ¦¦  Ü¦              B@    ÿÿÿÿ   ?   openURL/uriListener.isPreferredÁ                        ¹                                                ctype   desired  ù¦  §              B.    ÿÿÿÿ   I   openURL/uriListener.canHandleContentÁ                        ¹                                                ctype   preferred   desired   =§  j§              B>    ÿÿÿÿ   A   openURL/uriListener.getInterfaceÁ                 [       ¹                                              iid Ã§  ¾¨              T  ¸    
;   5   5   :    AT  ¸    
;   5   5   :       ;   5   5   pÙ
Ù
Ð/    equals   Components   interfaces+   nsIURIContentListener   nsILoadGroup   results+   NS_ERROR_NO_INTERFACE