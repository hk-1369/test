çżsš                s      š   S   ?      1                   L            resource://calendar/modules/calProviderUtils.jsm              	       ;    5   ¸   
=   : Q;    5   ¸   
=   : Q;    5   ¸   
=   : Q;    5   ¸   
=   : Q;    5   ¸   
=   : Q;    5   ¸   
=   : Qn   	f    o   	Q;   
   6   Q;   
   6   Q;   
   6   Q;   
   6   Q;   
   6   Q;   
   6   Q;   
5   Y   ;   ¸   
Z  ;    5   5   `   : ]      ]   6   Q;   
   6   Q;   
5   Y   ;   ¸   
Z  ;    5   5   `   : ]   @]   @]   ;    5   5   5   ]   6   Q;   
   	6   Q;   
   
6   Q;   
   6    Q;   
   6   !Q;   
   6   "Q;   
   6   #Q;   
5   #Y   ;   
5   $5   Â>]   %   ]   &   ]   '6   Q;   
   6   (Q;   
5   (Y   C]   *C]   +C]   ,C]   -C]   .C]   /C]   0C]   16   )Q;   
5   (Y   ;   ¸   
Z  ;    5   5   2`   ;    5   5   3`  : ]   @]   4@]   5@]   6@]   7@]   8   ]   9   a   :   a   ;   b   ;   a   <   b   <   a   =   a   >   a   ?   b   ?   a   @   b   @   a   A   b   A    a   B>]   %   !]   C   "]   D   #]   E   $]   F   %]   GB]   H   &a   I   'b   I   (]   J   )]   K   *]   L   +]   M   ,]   N   -]   O   .]   P   /]   Q   0]   R6   QÚ?ÚDÚHÚ?ÚAÚBĐ Đ<EĐHJĐMOĐ[oĐ    ĐĎĐ'Ó˙˙˙éČĐ  ˇ  ÂĐ  ĘĎĐ'Ó˙˙˙éČß  ŐĐ  Ű  äĐ " -Đ | Đ ¨Đ ś ťĐĎĐĘ ÎĐ × ŢĐĎĚĎĐÓÓ ěČ ńĘ ţĘ ĘĘ ,ĘĘ 4Ę >Ę CĘ HĘ MĘĘ UĘĘ ]Ę bĘ iĘ sĘ Ę Ę ŤĘĘ ´Ę ôĘ Ę Ę Ę Ę "Ę MĘ _Đ    Components   utils   importG   resource:///modules/mailServices.jsQ   resource://calendar/modules/calUtils.jsmY   resource://calendar/modules/calAuthUtils.jsmG   resource://gre/modules/Services.jsmK   resource://gre/modules/XPCOMUtils.jsmM   resource://gre/modules/Preferences.jsm!   EXPORTED_SYMBOLS   cal   prepHttpChannel   sendHttpRequest%   createStreamLoader!   convertByteArray?   InterfaceRequestor_getInterface   BadCertHandler   prototype   XPCOMUtils   generateQI   interfaces'   nsIBadCertListener2   QueryInterface#   notifyCertProblem!   FreeBusyInterval)   calIFreeBusyInterval   calId   interval   UNKNOWN   freeBusyType!   getImipTransport5   getEmailIdentityOfCalendar   fromRFC3339   toRFC3339   promptOverwrite   ObserverBag   calListenerBag   mBatchCount   notify   add   ProviderBase)   mTransientProperties-   cache.uncachedCalendar   currentStatus   itip.transport   imip.identity   imip.account-   imip.identity.disabled   organizerId   organizerCN   calICalendar+   calISchedulingSupport   mID	   mUri   mACLEntry   mObservers   mProperties!   initProviderBase   observers   id	   name   aclManager   aclEntry   superCalendar   uri   readOnly   canRefresh   startBatch   endBatch7   notifyPureOperationComplete/   notifyOperationComplete   notifyError1   mTransientPropertiesMode'   transientProperties   getProperty   setProperty   deleteProperty   refresh   addObserver   removeObserver   isInvitation%   getInvitedAttendee   canNotify                     cal                  ˙˙˙˙   %   calPrepHttpChannel              Ç      š      h                         3          	   aUri   aUploadData   aContentType-   aNotificationCallbacks   aExisting   channel   httpchannel     ő  ˘                T D   Q;    5   ¸   
T  :    QV   ¸   
;   5   5   :   QV  ¸   
=   =   	B: QV  ¸   
=   
=   B: QV  5   ;   5   5   5   6   QV  T 6   QT     QV  ¸   
;   5   5   : W  Q  QT ;   5   5   r   OT ¸   
;   5   5   : W  QV  ¸   
;   5   5   5   >: Q   h  Q;   5   5   ¸   
;   5   5   :   QV  =   6   QV  ¸   
T ¸   
:  : W  QČV  ¸   
V  T ×˙: QČV  ÝČÚČ$ÚÚŢxÍ)ËÚČÓJ.Ů	Čé2ÖĎ2Č4ĎŐ(˙˙˙áÉ8Ů;    Services   io#   newChannelFromURI   QueryInterface   Components   interfaces   nsIHttpChannel!   setRequestHeader   Accept   text/xml   Accept-Charset   utf-8,*;q=0.1   loadFlags   nsIRequest#   LOAD_BYPASS_CACHE+   notificationCallbacks!   nsIUploadChannel   nsIInputStream#   nsISeekableStream	   seek   NS_SEEK_SET   classesY   @mozilla.org/intl/scriptableunicodeconverter   createInstance;   nsIScriptableUnicodeConverter   charset   UTF-8)   convertToInputStream   toString   setUploadStream    ˙˙˙˙         stream                     converter        ś     ˙˙˙˙   F  b          ˙˙˙˙   %   calSendHttpRequest                 &       š                                              aStreamLoader   aChannel   aListener   ł  /  E             T  ¸    
T : QT ¸   
T  T : QŃÔ, 	   init   asyncOpen   ˙˙˙˙   +   calCreateStreamLoader                   *       š                                            i    J             ;    5   5   ¸   
;    5   5   : ÖĎKL    Components   classesI   @mozilla.org/network/stream-loader;1   createInstance   interfaces   nsIStreamLoader   ˙˙˙˙   '   calConvertByteArray                       š   	   )                        
             aResult   aResultLength   aCharset   aThrow    8  !  O                Q;    5   5   ¸   
;    5   5   :    QV   T D   Q=   6   QV   ¸   
T  T : ČČ   %   Qv   QT    
V   pČ    @dÖĎQČSŘŃĚĚĚZ    Components   classesY   @mozilla.org/intl/scriptableunicodeconverter   createInstance   interfaces;   nsIScriptableUnicodeConverter   charset   UTF-8)   convertFromByteArray    ˙˙˙˙          resultConverter        ˙˙˙˙          e            h          b   ˙˙˙˙˙˙˙˙b             j      ˙˙˙˙   ˙˙˙˙   E   calInterfaceRequestor_getInterface                @      š      Y                        &          	   aIID Ë  ť  o             A¸    
T  :   -   Qv   QT  ¸   
;   5   5   :    9A5       A;   5   5   R  6   QA5   Č   ĹT  ¸   
;   5   5   	: D   "QT  ¸   
;   5   5   
:    ";   5   ¸   
@: Č   eT  ¸   
;   5   5   :    5A5       A;   5   AR 6   QA5   Č   ;   V   6   QČ    @sËÉĚvŮ4ŃÉzÎŮÉŮŇËŮ0ÍÉÎÖ    QueryInterface   equals   Components   interfaces   nsIAuthPrompt2   calAuthPrompt   cal	   auth   Prompt+   nsIAuthPromptProvider   nsIPrompt   Services   ww   getNewPrompter'   nsIBadCertListener2   badCertHandler   BadCertHandler   returnCode    ˙˙˙˙          e                      !  ˙˙˙˙˙˙˙˙p          ˙˙˙˙Đ          ˙˙˙˙!            ˙˙˙˙   #   calBadCertHandler                        š                                               thisProvider m  Ľ               AT  6    QĘ!    thisProvider   ˙˙˙˙   -   cBCL_notifyCertProblem                      š      @                                @      socketInfo   status   targetSite   calWindow   timerCallback   timer W  ?         
      ;    ¸   
:     QY   A5   ]       ]      Q;   5   5   ¸   
;   5   5   	:   QV  ¸   

V   >;   5   5   	5   : QC  ĚÉËĎ  °ÖĎ  °ČĎÔ  ˛    cal#   getCalendarWindow   thisProvider   notify   Components   classes)   @mozilla.org/timer;1   createInstance   interfaces   nsITimer!   initWithCallback   TYPE_ONE_SHOT   ˙˙˙˙   W   cBCL_notifyCertProblem/timerCallback.notifyÁ                      š      1                                        timer   params   ÷               Y   B]       ]   C]      ]      Q      ¸   
=   =   =   V   : QA5   5   	E   QV   5       A5   ¸   

:  QĘĎÖ  ¤ŃÉŃ    exceptionAdded   sslStatus   prefetchCert   location   openDialogW   chrome://pippki/content/exceptionDialog.xul   3   chrome,centerscreen,modal   thisProvider   canRefresh   refresh   ˙˙˙˙   '   calFreeBusyInterval                 |       š      #                                        aCalId   aFreeBusyType   aStart	   aEnd    Ů  R!  Â             AT  6    QA;   5   5   ¸   
;   5   5   : 6   QA5   T 6   QA5   T 6   	QAT D   Q;   5   5   5   6   
QĘ×Ď  ÄÉĎĎäX    calId   interval   Components   classes=   @mozilla.org/calendar/period;1   createInstance   interfaces   calIPeriod   start   end   freeBusyType)   calIFreeBusyInterval   UNKNOWN   ˙˙˙˙   '   calGetImipTransport                 G       š                                 
             aCalendar Ć"  ů#  Ő             T  ¸    
=   :    2;   5   5   ¸   
;   5   5   :    @Ď-ÖĎ  ŘČ    getProperty   imip.identity   Components   classesc   @mozilla.org/calendar/itip-transport;1?type=email   getService   interfaces#   calIItipTransport   ˙˙˙˙   ;   calGetEmailIdentityOfCalendar               {      š      Ý                 	       .      @      aCalendar   outAccount   key 7%  k.  ä             ;    ¸   
T  =   ;   5   5   : QT  ¸   
=   :    Q   @I   ĄĆ       Q  Ů   >   
@ČÇ@   Q;    ¸   	
   : Q       H;    ¸   

=   T  5      T  5   5      T  5   =   : Q   ČÇČÇ    Q  Q   Q;   5   5      Q@  Q@  Q;   5   5   W  Q     Qv  QČ    >  Q    ÉmV      JV   ¸   
V  ;   5   5   : W  Q     Qv  Q@W  QČ    V  E   QV  5   Ů      JV  5   W  QV      -V  5   ¸   
>;   5   5   : W  Q   @W  QV  #?W  QăV   E   *QV  V   Ů   E   QV   D   QV   ˙˙˙ČV     %         V  6   QV  Č@ČČçĎÉ  ŃĚĚ  ě  öŮŕ  řĐŇÔŮÓ&  É  ˝  ů 'Ţ
ÍĚÍŘEÎŕÍ VĚ  ŕ&ËË Ď  ü    cal   ASSERT   no calendar!   Components   results)   NS_ERROR_INVALID_ARG   getProperty#   imip.identity.key   length3   calIterateEmailIdentities	   WARN   Calendar    uri	   spec   idW    has a dangling E-Mail identity configured.   MailServices   accounts   defaultAccount   queryElementAt   interfaces   nsIMsgAccount   identities   defaultIdentity   nsIMsgIdentity   value    ˙˙˙˙          identity             ?   calGetEmailIdentityOfCalendar/<Á                 D       š                                              identity_   account   &  Ë'  í             T  5         &T     Q       T 6   QT  5      ÎÉÎĎ    key   value    ˙˙˙˙          accounts       account       identity                    exc                    i                    exc        R  ů        ^  +                 Q      ˙˙˙˙˙˙˙˙k          ˙˙˙˙Ţ             ę     ˙˙˙˙   4           G                  ˙˙˙˙t        ˙˙˙˙x           ˙˙˙˙      fromRFC3339            Â      š      Ý                        .          	   aStr   aTimezone   re   matches   dateTime  /  :  -            ;    ¸   
:    Q;   =   R W   QV   ¸   
T  : W  QV      @V  V  ×7@6   QV  V  ?76   QV  V  ×7?6   QV  V  ×76   QV  5       8V  V  ×76   	QV  V  ×76   
QV  V  ×76   QV  ×	7=   D   QV  ×	7=      #V  ;    ¸   
:  6   Q  ŹV  ×	7@   V  T 6   Q    QV  ×7=      ×˙   ?V  ×7XV  ×7×<  QV  T 6   QV  5   V    /  Q  Q;    ¸   
:    QV  5     Q   Xm  QV  ¸   
:    QV  V  ¸   
V  : 6   QV  5   V     V  ČČČČăV  ¸   
:  ˙˙˙V  ;    ¸   
:  6   QV  5       kV  5   	V  ×7=      ×˙   ?V  ×76   	QV  5   
V  ×7=      ×˙   ?V  ×76   
QČČV   4ĚČËČÎ
ČÓĐÓŃĘŃŃŃŕĐÎÉ YŇÍÍÜÍ eÎŃĚČÎ(h)ËČÓÉÎĘ kŐ tĐÉĘ×Őx×ŐxÉ    cal   createDateTime   RegExpń   ^([0-9]{4})-([0-9]{2})-([0-9]{2})([Tt]([0-9]{2}):([0-9]{2}):([0-9]{2})(\.[0-9]+)?)?(([Zz]|([+-])([0-9]{2}):([0-9]{2})))?	   exec   isDate	   year   month   day	   hour   minute   second   Z   z   timezone   UTC   -   timezoneOffset%   getTimezoneService   timezoneIds   getNext   getTimezone   hasMore    ˙˙˙˙         offset_in_s                     tzService       enumerator                    id        Ä  h       6    ˙˙˙˙     (         Ć  Q                             ˙˙˙˙           ˙˙˙˙      toRFC3339               é      š      }                           $             aDateTime   full_tzoffset   tzoffset_hr   tzoffset_mn   str };  @              T      =    T  5   W   Q;   ¸   
;   ¸   
V   : X: W  Q;   ¸   
V   : X¸   
×: V  ×<W  QT  5   =   =   T  5   	?¸   

×ţ: =   =   T  5   ¸   

×ţ: W  QT  5      V  =   =   T  5   ¸   

×ţ: =   =   T  5   ¸   

×ţ: =   =   T  5   ¸   

×ţ: W  QT  5   >   bV  V   >   =      
=   =   V  ¸   

×ţ: =   =   V  ¸   

×ţ: W  Q   :T  5   5      V  =   W  Q   V  =   W  QV  ÍÜ˙˙˙őČĐÓÍÎŮ	Ę×	ÉÉÉ×Ę×Ę×|Ę]Ę
ÔÓĘÓ|ËÍÉxËÉx       timezoneOffset	   Math   floor   abs   toFixed	   year   -   00   month   substr   day   isDate   T	   hour   :   minute   second   +   timezone   isFloating   -00:00   Z   ˙˙˙˙   '   cal_promptOverwrite               a       š   	   /                                        aMode   aItem   window	   args  R@  ÚA  Ş            ;    ¸   
:     QY   T ]   T  ]   B]     QV   ¸   
=   =   =   V  : QV  5   Ě	Č	ČČËĐ ° ľĘ    cal#   getCalendarWindow	   item	   mode   overwrite   openDialogo   chrome://calendar/content/calendar-conflicts-dialog.xul/   calendarConflictsDialog+   chrome,titlebar,modal   ˙˙˙˙      calObserverBag                        š                                              iid ]B  zB  ť            A¸    
T  : QĎ 	   init   ˙˙˙˙   +   calObserverBag_notify               n      š      )                                    	   func	   args   arguments  C  =D  Â            	W   QT  x=    y   =   y   z   /A5   #?6   Q   A5   #?6   Q   A5   5   5   ¸   
AV   O kDu
uĘ ÄĐXĐXÜ7    onStartBatch   onEndBatch   mBatchCount   __proto__   notify   apply   ˙˙˙˙   %   calObserverBag_add               l      š      *                          	            iface   i   arguments dD  F  Î            	W  QA5    5    5   ¸   
AV  O E   QA5   >   8A5   W   Q   mT  ¸   
:  QăV   #?W   Q˙˙˙âÜŃĘ # ŇÎ Ň+Ô%    __proto__   add   apply   mBatchCount   onStartBatch    B   #      ˙˙˙˙      calProviderBase                          š                                            F  ŃF  Ţ            ;    ¸   
=   : QŐ7    cal   ASSERTQ   This prototype should only be inherited!   ˙˙˙˙   )   cPB_initProviderBase                   T       š                                 
           .I  J  ÷            AA6    QA;   5   ;   5   5   R 6   QAY   6   QA5   ;   5   	5   
6   QČŰÉĚŰ:    wrappedJSObject   mObservers   cal   ObserverBag   Components   interfaces   calIObserver   mProperties   currentStatus   results   NS_OK   ˙˙˙˙   I   cal.ProviderBase.prototype.observersÁ                          š                                            &J  PJ  ţ            A5        mObservers   ˙˙˙˙   ;   cal.ProviderBase.prototype.idÁ                          š                                            ~J  ĄJ              A5        mID   ˙˙˙˙   ;   cal.ProviderBase.prototype.idÁ             ń       š      P                                     aValue)   takeOverIfNotPresent   calMgr   this_ ­J  âO        
          W   QA5       ;   5   5   pAT  6    Q;   ¸   
:     QA5   K  Q   _mW  ;   5   5   V  7    @  QA5   V  7  QV  @I      ¸   	
AV  V  : QČăQLM˙˙˙ĄQNČA   QV   =   
=   : QV   =   =   : QT   Ę ĐĘĚ	ÉĎ0dĘŐËĐç  %ÓÓ    mID   Components   results9   NS_ERROR_ALREADY_INITIALIZED   cal%   getCalendarManager   mProperties   ProviderBase)   mTransientProperties!   setCalendarPref_7   lightning-main-in-composite5   calendar-main-in-composite-   lightning-main-default+   calendar-main-default   ˙˙˙˙   )   takeOverIfNotPresent               Ť       š                                              oldPref   newPref#   dontDeleteOldPref   val   &M  ÜN                    ¸    
      T  :    QV   @I   ~T     '      ¸   
      T  : Q      ¸    
      T : @H   +      ¸   
      T V   : QŢČâŢć- !   getCalendarPref_'   deleteCalendarPref_!   setCalendarPref_    ˙˙˙˙         aName                    aValue       X   e      N   q   ˙˙˙˙   x   :          ˙˙˙˙   ?   cal.ProviderBase.prototype.nameÁ                          š      	                                      P  GP  ,            A¸    
=   : Í    getProperty	   name   ˙˙˙˙   ?   cal.ProviderBase.prototype.nameÁ                        š      	                                        aValue UP  P  /            A¸    
=   T  : Đ!    setProperty	   name   ˙˙˙˙   K   cal.ProviderBase.prototype.aclManagerÁ                 r       š      !                                      /   defaultACLProviderClass   providerClassčP  }R  4            =       QA¸   
=   :   QV   D   Q;   5   V  7    V   W  Q;   5   V  7¸   
;   5   5   : ĘÍČËĐÉĺ[ a   @mozilla.org/calendar/acl-manager;1?type=default   getProperty   aclManagerClass   Components   classes   getService   interfaces-   calICalendarACLManager   ˙˙˙˙   G   cal.ProviderBase.prototype.aclEntryÁ                          š                                            ÉR  ňR  >            A5        mACLEntry   ˙˙˙˙   Q   cal.ProviderBase.prototype.superCalendarÁ                          š                                            7S  "T  C            A5       A5    5      A×H    mSuperCalendar   superCalendar   ˙˙˙˙   Q   cal.ProviderBase.prototype.superCalendarÁ                        š                                               val 9T  rT  H            AT  6    Ę#    mSuperCalendar   ˙˙˙˙   =   cal.ProviderBase.prototype.uriÁ                          š                                            T  ÁT  M            A5     	   mUri   ˙˙˙˙   =   cal.ProviderBase.prototype.uriÁ                        š                                               aValue ÎT  U  P            AT  6    Ę 	   mUri   ˙˙˙˙   G   cal.ProviderBase.prototype.readOnlyÁ                          š      	                                      9U  pU  U            A¸    
=   : Í    getProperty   readOnly   ˙˙˙˙   G   cal.ProviderBase.prototype.readOnlyÁ                        š      	                                        aValue U  ÇU  X            A¸    
=   T  : Đ%    setProperty   readOnly   ˙˙˙˙   K   cal.ProviderBase.prototype.canRefreshÁ                          š                                              
V  *V  ]            B    ˙˙˙˙      cPB_startBatch                   2       š      
                                      V  ńV  c            A5    #?
6    Q>   A5   ¸   
=   : QÖÖ'    mBatchCount   mObservers   notify   onStartBatch   ˙˙˙˙      cPB_endBatch                   \       š                                 	           W  X  i            A5    >   6A5    #?6    >   A5   ¸   
=   : Q   ";   ¸   
A5    >=   : QČ1ŃŰÝ9    mBatchCount   mObservers   notify   onEndBatch   cal   ASSERT)   unexepcted endBatch!   ˙˙˙˙   ?   cPB_notifyPureOperationComplete                V       š                                           aListener   aStatus   aOperationType   aId   aDetail     aX  ­Z  s            T     RT  ¸    
A5   T T T T : Q   ,   Qv   Q;   ¸   
V   : QČ    !ĺĚŰ '   onOperationComplete   superCalendar   cal   ERROR    ˙˙˙˙          exc         	   %       /       ˙˙˙˙   ˙˙˙˙   7   cPB_notifyOperationComplete                       š      C                                         aListener   aStatus   aOperationType   aId   aDetail   aExtraMessage      ńZ  C`              A¸    
T  T T T T : QT ;   5   5   5      ;   ¸   
T :    A¸   
=   T : Q   §T ;   5   5   r   A¸   	
T : Q   A¸   	
T T : QA¸   	
T ;   5   5   
5      ;   5   5   5      ;   5   5   5   T D   Q=   : Q ŰŘĎŮÓÔŇŕŮÔÎ 2 7   notifyPureOperationComplete   Components   interfaces   calIErrors'   OPERATION_CANCELLED   isSuccessCode   setProperty   currentStatus   nsIException   notifyError+   calIOperationListener   GET   READ_FAILED'   MODIFICATION_FAILED      ˙˙˙˙      cPB_notifyError                        š      /                                        aErrNo   aMessage  Ť`  ˝b              T  ;    5   5   5      T  ;    5   5   r   &T     T  5   U QT  5   U  QA¸   
=   T  : QA5   	¸   

=   Z  A5   `   T  `  T `  : QŘÓĚĚÔÖ"Ę˙˙˙ÂI    Components   interfaces   calIErrors'   OPERATION_CANCELLED   nsIException   message   result   setProperty   currentStatus   observers   notify   onError   superCalendar   ˙˙˙˙   ]   cal.ProviderBase.prototype.transientPropertiesÁ                          š                                             c  8c  Ź            A5    % 1   mTransientPropertiesMode   ˙˙˙˙   ]   cal.ProviderBase.prototype.transientPropertiesÁ                        š                                               value Uc  c  Ż            AT  6    Ę/ 1   mTransientPropertiesMode   ˙˙˙˙      cPB_getProperty              \      š       Ř                         .             aName   ret ýc  §n  ´      	      T  x=    y   =   y   %=   y   1z   .;   ¸   
A: ;   ¸   
=   B: AA5   T  7   QV   ;   	H  í@W   QT  x=   
y   (=   y   8=   y   l=   y   Ŕz  ;   ¸   
A: W   Q   ů  QY     Q;   ¸   
AV  :    V  5   W   QČ   źČ  QA¸   
=   
:   QV     2=   V  ¸   
;   5   5   : 5      @W   QČ   ^Č  QA¸   
=   
:   QV     ,V  ¸   
;   5   5   : 5      @W   QČ   ČV   @HE   'Q;   5   5   T  7 E   QA5       gA5      ';   ¸   
:  ¸   
AT  : W   QT  x=   y   
z   'A¸   
=   : BH   CW   Q   A5   T  V   8QV   kMu
u
uĘ śÍŇĎĘk <u
u
 Îu
 ŐuĘ ĂÍČXĘŃÎYÍČ-ß*ÎYÍČ'ÚÍYĚÚĚÖk2uĘÍXĎ    itip.transport'   itip.notify-replies-   cache.uncachedCalendar   cal!   getImipTransport   Preferences   get9   calendar.itip.notify-replies   mProperties   undefined   imip.identity   imip.account   organizerId   organizerCN5   getEmailIdentityOfCalendar   value   getProperty   mailto:   QueryInterface   Components   interfaces   nsIMsgIdentity   email   fullName   ProviderBase)   mTransientProperties'   transientProperties   id%   getCalendarManager!   getCalendarPref_   suppressAlarmsG   capabilities.alarms.popup.supported    ˙˙˙˙         outAccount        ˙˙˙˙         identity        ˙˙˙˙         identity        Ŕ   =   ˙˙˙˙˙˙˙˙÷             ţ   ]   ˙˙˙˙˙˙˙˙U           \  W   ˙˙˙˙˙˙˙˙­           ˙˙˙˙      cPB_setProperty                     š      V                                        aName   aValue   oldValue  o  Ţr  ô      	      A¸    
T  :    QV   T    ěA5   T  T 8QT  x=   y   
z   >A5   =   &QA5   =   &QA5   =   &QA5   =   &Q   A5    E   &Q;   5   	5   
T  7 E   QA5      &;   ¸   
:  ¸   
AT  T : QA5   ¸   
=   Z  A5   `   T  `  T `  V   `  : QT ËČČÎkIuĘÍÍÍÍXÍÚáŇ$ĘČ     getProperty   mProperties#   imip.identity.key   imip.identity   imip.account   organizerId   organizerCN'   transientProperties   cal   ProviderBase)   mTransientProperties   id%   getCalendarManager!   setCalendarPref_   mObservers   notify#   onPropertyChanged   superCalendar   ˙˙˙˙   %   cPB_deleteProperty                 U       š                                 
             aName Bs  t              A5    ¸   
=   Z  A5   `   T  `  : QA5   T  &Q;   ¸   
:  ¸   
AT  : QÖ.Ę˙˙˙žËŢ:    mObservers   notify%   onPropertyDeleting   superCalendar   mProperties   cal%   getCalendarManager'   deleteCalendarPref_   ˙˙˙˙      cPB_refresh                          š                                              Pt  ot              @    ˙˙˙˙      cPB_addObserver                        š                                              aObserver Đt  u              A5    ¸   
T  : QÔ    mObservers   add   ˙˙˙˙   %   cPB_removeObserver                        š                                              aObserver uu  łu              A5    ¸   
T  : QÔ"    mObservers   remove   ˙˙˙˙   !   cPB_isInvitation              Ů      š      Ł                        !             aItem   org   ownerIdentities 5v  X|  "      
      A5     D   QA5    5          QA¸   
=   :   QV     w  QT  5     QV   D   8QV  5    D   (QV  5   ¸   
:  V  ¸   
:     
BČČT  ¸   
V  : @ČČČBČČT  5      QV    D   QV   5       GT  5      8T  5   5   W   QV    D   QV   5       B   BA5    ¸   	
Y   :   Q>  Q    }m  Q=   
V  V  75   ¸   
:    QV   5   ¸   
:  V     
BČČT  ¸   
V  : @   
CČČČV  #?W  QQăV  V  Ů   ˙˙˙xČBÍĚËÍČËÍËŕÎÎĘÍËĘČ3ŇËĘ	 @ŇČ&}o  (ÚÉĐČÎ A4Î˙˙˙äÖ J    mACLEntry!   hasAccessControl   getProperty   organizerId   organizer   id   toLowerCase   getAttendeeById   parentItem%   getOwnerIdentities   mailto:   email   length    ˙˙˙˙         id                     org        ˙˙˙˙         i                    identity        H               ˙˙˙˙   C   q                    ˙˙˙˙             ą         ˙˙˙˙˛         ˙˙˙˙ˇ             =     ˙˙˙˙   J  h                 ˙˙˙˙     	      Ż        ˙˙˙˙°           ˙˙˙˙   -   cPB_getInvitedAttendee                    š   
   a                                     aItem   id   attendee |    M            A¸    
=   :    QV      T  ¸   
V   :    @  QV   E   QA5   E   QA5   5      ¸  QA5   ¸   
Y   :   QV  Ů   >     Q  Q>  Q    Mm=   V  V  75   ¸   	
:  W  QT  ¸   
V  : W  QV  #?W  QQăV   E   QV  V  Ů   ˙˙˙ČČČV  ÍČÓÎâËŇČËË&M?h UÚÉÎČ UIÎ W U ă \    getProperty   organizerId   getAttendeeById   mACLEntry!   hasAccessControl%   getOwnerIdentities   length   mailto:   email   toLowerCase    ˙˙˙˙         ownerIdentities                     identity                    i        Š   h       b   ˛   ˙˙˙˙                   t         ˙˙˙˙      cPB_canNotify                        š                                                aMethod   aItem  F    _            B 