   K   ¹   [ç¿s¹                Ê   s   ¹      X                                      chrome://messenger/content/mailContextMenus.js     ^U                                                  	   
                                 ;    5   ¸   
=   : ;    5   ¸   
=   : ;    5   ¸   
=   : ×   Q	Ê	+	8	K	\	d	u	  	  ¹	  ê	 	 	 $	 	 	 	 %	 2	 ;	 E	 W	 m	ÚAÚ?Ú?	È#+68EKZ\bdmu      ·  æ     0 8 C T k     Components   utils   importK   resource://gre/modules/PluralForm.jsmG   resource://gre/modules/Services.jsmG   resource:///modules/mailServices.js   mailtolength   ÿÿÿÿ   E   RestoreSelectionWithoutContentLoad                ¦       ¹   
   /                                   	   tree   l               ;          Q  Q   Q;    5      Q;    5     Q;    5     QV   V  6   QV  ¸   
V  : Qn    @o    QT     T  5   ¸   
:  Q;   â   =   	: QÈ×ÏÏÏÎÓÌÓ!Ô( ?   gRightMouseButtonSavedSelection	   view%   transientSelection   realSelection   selection1   replayAdjustSelectionLog   treeBoxObject   invalidate#   UpdateMailToolbarE   RestoreSelectionWithoutContentLoad    ÿÿÿÿ       	   view    %   transientSelection       realSelection              ÿÿÿÿ   ÿÿÿÿ   1   mailContextOnPopupHiding               X       ¹      !                                        aEvent   wasInThreadPane   Ð  +             T  5    T  5      ;   5      Qn   @o   QV       ;   â   ;   â   :  : Q/Ñ2ÏÌÔ#ÿÿÿÝ4    target   currentTarget   gContextMenu   inThreadPaneE   RestoreSelectionWithoutContentLoad   GetThreadTree   ÿÿÿÿ   '   fillMailContextMenu                 |       ¹   
   %                                        event î  c	  8             T  5    T  5      C;   â   =   : Q;   â   =   : Q;   â   :  Qn   ;   T  5    T  5   R o   Q;   5   	;Ñ>ÓÓAÎCÛÉË"    target   currentTarget   goUpdateCommand!   cmd_printpreview   cmd_print[   updateCheckedStateForIgnoreAndWatchThreadCmds   gContextMenu   nsContextMenu   shiftKey   shouldDisplay   ÿÿÿÿ   1   FillMessageIdContextMenu               ¨       ¹      )                                        messageIdNode   msgId   currentMsgId î	    K             T  ¸    
=   : W   Q;   ¸   
=   : ¸   
=   V   : Q=   ;   5   	5   
=   W  Q;   ¸   
=   : V  V   6   Q;   ¸   
=   : ;   5    6   QÏÈÛÉNSàÔÏXÔÑ&    getAttribute   messageid   document   getElementByIdA   messageIdContext-messageIdTarget   setAttribute   label   <   gFolderDisplay   selectedMessage   messageId   >I   messageIdContext-openMessageForMsgId   hiddenK   messageIdContext-openBrowserWithMsgId+   selectedMessageIsNews   ÿÿÿÿ      CopyMessageId               @       ¹                                 
             messageId   clipboard   s  \             ;    5   5   ¸   
;    5   5   : W   QV   ¸   
T  : QÖÏ^ÈaÒ     Components   classesK   @mozilla.org/widget/clipboardhelper;1   getService   interfaces%   nsIClipboardHelper   copyString   ÿÿÿÿ   )   GetMessageIdFromNode               D       ¹                                              messageIdNode   cleanMessageId   messageId    o  d             T  ¸    
=   : W   QT    $V   ¸   
?V   Ù   ?: W   QV   ÏÈi×Èl    getAttribute   messageid   substring   length   ÿÿÿÿ   1   OpenBrowserWithMessageId                     ¹      2                                    messageId   browserURL   c  u       	      ;    5   ¸   
=   ;   5   5   : 5   W   QV   ¸   
     T  : W   Q;   	¸   

V   : Q   7  Qv  Q;   5   ¸   
=   V   : QÈ    ÖÏwÍyÓÈÙ~ÌÖ  Ë    Services   prefs   getComplexValue=   mailnews.messageid_browser.url   Components   interfaces-   nsIPrefLocalizedString	   data   replace   messenger#   launchExternalURL   utils   reportErrorc   Failed to open message-id in browser; browserURL=    ÿÿÿÿ         ex    	   %mid         N          h   +   ÿÿÿÿ   ÿÿÿÿ   /   OpenMessageForMessageId              <      ¹   $   ·                        0             messageId   startServer   messageHeader °  Á               ;    5   5      Q;   ¸   
=   : Q;   â   ;    5   T  :   QV      ü  Q;   5   5   	  Q;   
â   
V   5   T  : W  Q>  Q    m  QV  ¸   
V  ;   5   5   :   QV  E   .QV   V  E   QV  5   E   QV  5       #;   
â   
V  5   T  : W  QÈV  #?W  QQãV  V  Ù   E   QV   ÿÿÿTÈÈ;   ¸   
=   : QV     5;   â   V  ;   5   ¸   
=   : : Q   ©  Q  Q  Q  Q=   T  =     Q;   ¸   
=   :   QV  ¸   
=   :   QV  ¸    
=   !Z  V  `   :   Q;   5   "¸   #
;   V  V  : QÈÔÕ×ÈÔÖÈ&      ±
ÞÈÙÏ-ÊÖÉ  =Î    ÖÌ  §Õ0ä#ÿÿÿÝÉØÔÑ	ÈÐÈÐ2È  ²Èã  ®    msgWindow   openFolder   server   window   setCursor	   wait3   CheckForMessageIdInFolder   MailServices   accounts   allServers;   SearchForMessageIdInSubFolder   rootFolder   queryElementAt   Components   interfaces)   nsIMsgIncomingServer#   canSearchMessages   isDeferredTo   length	   auto'   OpenMessageByHeader   Services   prefs   getBoolPrefE   mailnews.messageid.openInNewWindow   <   >   document   getElementById!   bundle_messenger   getStringC   errorOpenMessageForMessageIdTitle%   getFormattedStringG   errorOpenMessageForMessageIdMessage   prompt   alert    ÿÿÿÿ         allServers                     i                    currentServer        ÿÿÿÿ         messageIdStr       bundle       errorTitle       errorMessage           ±       S   ö   ÿÿÿÿ      ½                            ÿÿÿÿ   ÿÿÿÿ   '   OpenMessageByHeader              ª      ¹      }                        '             messageHeader   openInNewWindow   folder   folderURI	   tree   wintype  ß  ]  ¹             T  5    W   QV   5   W  QT    ,;   ¸   
=   =   =   T  : Q  d;   5   V     ;   	¸   

V   : Q@W  Q;   5   ¸   
=   : W  QV  =      0;   â   :  W  QV  5   5   ¸   
:  Q;   ¸   
T  5   : Q     Qv  Q;   â   =   : Q;   ¸   
T  5   : Q   D  Qv  Q;   â   =   T  5   =   V   5   : QÈ    È    V  E   QV  5   ×ÿ   "V  5   ¸   
V  5   : QÍÎ'ÑÊ  ÀÉ  ÅÏÔÖ
ÈÊÊÈÙÝÌ,ÓÝÌ	ØÐ  Þ	Ò  ãÖÝ9    folder   URI   window   openDialogY   chrome://messenger/content/messageWindow.xul   _blankG   all,chrome,dialog=no,status,toolbar   msgWindow   openFolder   gFolderTreeView   selectFolder   document   documentElement   getAttribute   windowtype%   mail:messageWindow   GetThreadTree	   view   selection   clearSelection   gDBView   selectMsgByKey   messageKey   goDoCommand   cmd_viewAllMsgs	   dump%   select messagekey %    failed in folder    currentIndex   treeBoxObject%   ensureRowIsVisible    ÿÿÿÿ         e                     e         Ñ           û   0       ï   |   ÿÿÿÿ   ,  8          ÿÿÿÿ   ;   SearchForMessageIdInSubFolder               Û       ¹      [                                       folder   messageId   messageHeader   subFolders   currentFolder  ú  ±   ê       	      V   QT  5    W  QT  5       ;   â   T  T : W   Q   }mV  ¸   
:  ¸   
;   5   5   : W  Q;   â   V  T : W   QV    E   QV  5      ;   	â   	V  T : W   QãV  ¸   

:  E   QV    ÿÿÿmV   ÍÉÐÈ(    õËáÑÈÔÑÈ  ô	Ö Ê      subFolders   isServer3   CheckForMessageIdInFolder   getNext   QueryInterface   Components   interfaces   nsIMsgFolder   hasSubFolders;   SearchForMessageIdInSubFolder   hasMoreElements    =         ÿÿÿÿ   3   CheckForMessageIdInFolder            Ã       ¹      D                                     folder   messageId   messageDatabase   messageHeader!   nsMsgFolderFlags  O!  ¦#        
      T  5    W   QV  QV   ¸   
T : W  Q   6  Qv  Q;   5   ¸   
=   T : QÈ    ;   5   5     Q;   5   	¸   

T  :  E   #QT  5   V  5   V  5       T  @6    QV  ÍÎÍÌÖ ËÔÔÊÝÊ    msgDatabase+   getMsgHdrForMessageID   Components   utils   reportError_   Failed to find message-id in folder; messageId=   interfaces!   nsMsgFolderFlags   MailServices   mailSession)   IsFolderOpenInWindow   flags   Trash   Inbox    ÿÿÿÿ         ex                   /   *   ÿÿÿÿ   ÿÿÿÿ   /   folderPaneOnPopupHiding                   #       ¹                                            È#  $              ;    â    ;   ¸   
=   : : QÛ#ÿÿÿÝJ E   RestoreSelectionWithoutContentLoad   document   getElementById   folderTree   ÿÿÿÿ   3   fillFolderPaneContextMenu            3	      ¹   Q   :                       ¼             aEvent   bundle   folders   numSelected)   checkIsVirtualFolder+   haveAnyVirtualFolders   checkIsServer   selectedServers3   checkCanSubscribeToFolder7   haveOnlySubscribableFolders!   checkIsNewsgroup%   haveOnlyNewsgroups#   checkIsMailFolder'   haveOnlyMailFolders'   checkCanGetMessagesC   selectedFoldersThatCanGetMessages)   checkCanDeleteFolder1   haveOnlyDeletableFolders)   checkIsDeleteEnabled9   haveOnlyDeleteEnabledFolders+   checkCanCompactFolder5   haveOnlyCompactableFolders+   checkIsCompactEnabled;   haveOnlyCompactEnabledFolders#   hideIfAppropriate   target   specialFolder ?$  ¶H  $      '             Q   W  Q   W  Q      Q   W  	Q   W  Q   W  Q   W  Q   W  Q   	W  Q   
W  Q;    5     QV  5   =       Q  Q  QV  5     Q;    ¸   
V  :   Q@  Q>  Q    RmV  ¸   
V  : 5   =      !V  ¸   
V  : W  Q   (V  #?W  QQãV  V  Ù   ÿÿÿ£ÈV     \  Q;    ¸   	
V  =   
=   :   QV  ¸   
V  : QV  ¸   
V  =   >>C: QÈBÈÈ;    ¸   
=   : W   Q;   ¸   
:  W  QV  Ù       BV  Ù   W  QV  ¸   
   : W  QV  ¸   
V  : W  Q  QV  ?   0V     =      ;   â   V  >7: W  QV  ¸   
V  : W  QV  ¸   
   : W  QV  ¸   
V  	: W  
QV  ¸   
V  : W  QV  ?   2;   â   =   B: Q;   â   =   B: Q   jV  Ù   ?   2;   â   =   B: Q;   â   =   C: Q   -;   â   =   B: Q;   â   =   C: Q;   â   =   V  Ù   >E   -QV  Ù   V  E   QV  Ù   V  Ù   D   QV  Ù   V  : QV  ?    QV  >75   5   =   E   QV  >75   D   QV  =      Q;   â   =   !V  : Q;   "â   "=   !V  >75   5   =   #D   Q;   $¸   %
:  : QV     vV  >75   &D   QV  =       0;   'â   '=   !V   ¸   (
=   ): : Q   +;   'â   '=   !V   ¸   (
=   *: : QÈ   ;   â   =   !B: QV  ?   Â;   â   =   +V  >75   & E   !QV  >75   ,E   QV  =   -D   >QV  =   D   .QV  =   .E   Q;   /â   /V  >75   0: : Q;   "â   "=   +V  >75   & E   QV  >7¸   1
=   2: : Q   ;   â   =   +B: QV  ¸   
V  : W  Q;   â   =   3V  E   QV  ?: QV  ¸   
V  : W  Q;   "â   "=   3V  : QV  ¸   
V  : W  Q;   â   =   4V  : QV  ¸   
V  : W  Q;   "â   "=   4V  : Q;   â   =   5V  ?E   QV  >75   & : QV  ?E   QV  >75   &    ]  Q;   65   75   85   9  Q;    ¸   
=   5: ¸   :
=   ;V  >7¸   <
V  : : QÈ;   â   =   =V  ?E   QV  =   >: Q;   â   =   ?V  ?E   QV  =   .: Q;   â   =   @V  ?E   QV  =   A: Q;   "â   "=   @;   Bâ   BV  >7: : Q;   â   =   CV  ?E   
QV  : Q;   â   =   DV  : Q;   â   =   EV  : Q;   'â   '=   E;   F¸   G
V  V   ¸   (
=   H: : : Q;   â   =   IV  
E   QV   : Q;   'â   '=   I;   F¸   G
V  V   ¸   (
=   J: : : Q;   â   =   KV  ?E   QV   : Q;   Lâ   L=   M: Q;   â   =   NV  Ù   >: QV  =   N: QV  =   O: QV  =   P: QC BË HÊ RÊ [Ë aÊ fÊ ®Ê ¶Ê ½Ê ÅÊ þÊ %ÏÏ×ÎÐÈ&RDb ,Ï
ÎÏÈH ,)Î / ,Ö 2Ë
ÚÈÓÜÑ	ÈÌ
ÈÊÎÐÈÏÈ
ÏÐ*È YÏÈÐÈÏÈ mÏ$È-ÔÙË-ÔÙÔÔ ÏÑÔÙÎ   ËíÏ×ëÌ, Û+ÏÐ ÉÏÐ ÊÔ  ½Ïãàå- ¢Ïä ¦ÉÔ ³ÏÈãÏÈ× ÂÏÈ×Ï È×ÏÌ#Ì ÌÌÌ
ÙÛÖ% Ò ×ÏÖ ×ÏÖ ÛÏÖ ßÏÐ áÏÐ å××ÏÐÐ" î í òÏÊ& òÏÐÐ" õ ô ùÏÌ# ùÓ ÞÎÎÎ    document   popupNode   localName   treecol   parentNode#   getAnonymousNodes	   item   treecolpicker   length=   getAnonymousElementByAttribute   anonid   popup   buildPopup   openPopup   after_start   getElementById!   bundle_messenger   gFolderTreeView%   getSelectedFolders	   some   filter   Virtual-   getSpecialFolderString   every   ShowMenuItem5   folderPaneContext-settings9   folderPaneContext-properties;   folderPaneContext-getMessages   server	   type	   nntp'   canCreateSubfolders   Inbox+   folderPaneContext-new   EnableMenuItem	   imap   MailOfflineMgr   isOnline   isServer!   SetMenuItemLabel   getString   newFolder   newSubfolder1   folderPaneContext-rename   canRename	   none	   Junk/   CanRenameDeleteJunkMail   URI!   isCommandEnabled!   cmd_renameFolder1   folderPaneContext-remove3   folderPaneContext-compactA   folderPaneContext-favoriteFolder   Components   interfaces!   nsMsgFolderFlags   Favorite   setAttribute   checked   getFlag9   folderPaneContext-emptyTrash   Trash7   folderPaneContext-emptyJunkI   folderPaneContext-sendUnsentMessages   Outbox/   IsSendUnsentMsgsEnabled7   folderPaneContext-subscribeC   folderPaneContext-newsUnsubscribeM   folderPaneContext-markNewsgroupAllRead   PluralForm   get#   markNewsgroupReadO   folderPaneContext-markMailFolderAllRead   markFolderReadA   folderPaneContext-searchMessages   goUpdateCommand   cmd_search-   folderPaneContext-sep1-   folderPaneContext-sep2-   folderPaneContext-sep3   ÿÿÿÿ   )   checkIsVirtualFolder               (       ¹                                              folder   kVirtualFlag  (  (  B            ;    5   5   5      QT  5   V   
ÙÎ#    Components   interfaces!   nsMsgFolderFlags   Virtual   flags   ÿÿÿÿ      checkIsServer                 
       ¹                                              folder Û(  )  H            T  5    É    isServer   ÿÿÿÿ   3   checkCanSubscribeToFolder                 Z       ¹                                              folder *  Ü*  R               T  :    BT  5    5   =   D   2QT  5    5   =   D   QT  5    5   =   ÉÙÙÔ'    server	   type	   nntp	   imap   rss   ÿÿÿÿ   !   checkIsNewsgroup                 B       ¹                                              folder G+  Ê+  [            T  5     E   7QT  5   5   =   E   QT  ¸   
;   5   :  èÔ)    isServer   server	   type	   nntp   getFlag!   nsMsgFolderFlags   Virtual   ÿÿÿÿ   #   checkIsMailFolder                 $       ¹      	                                        folder $,  o,  a            T  5     E   QT  5   5   =   ã1    isServer   server	   type	   nntp   ÿÿÿÿ   '   checkCanGetMessages                      ¹   
                                           folder   kTrashFlag Í,  .  f            ;    5   5   5      QT  5   E   QT  5   5   =   D   WQ   T  : D   EQT  5   5   =   E   ,QT  ¸   	
V   C:  E   Q   T  :  
ÙçÉÉÙ-ÏÊÉ    Components   interfaces!   nsMsgFolderFlags   Trash   isServer   server	   type	   none   rss   isSpecialFolder   ÿÿÿÿ   )   checkCanDeleteFolder                 =       ¹                                              folder F8  á8  ®            T  ¸    
;   5   B:    ;   â   T  5   : T  5   ÕÒÉ    isSpecialFolder!   nsMsgFolderFlags	   Junk/   CanRenameDeleteJunkMail   URI   deletable   ÿÿÿÿ   )   checkIsDeleteEnabled                        ¹      	                                        folder ¢9  â9  ¶            T  ¸    
=   : Ï& !   isCommandEnabled   cmd_delete   ÿÿÿÿ   +   checkCanCompactFolder               O       ¹                                              folder   kVirtualFlag È:  ;  ½            ;    5   5   5      QT  5   E   ,QT  5   V    E   QT  ¸   
=   : 
ÙÎÔÏ-    Components   interfaces!   nsMsgFolderFlags   Virtual   canCompact   flags!   isCommandEnabled#   cmd_compactFolder   ÿÿÿÿ   +   checkIsCompactEnabled                        ¹      	                                        folder N<  <  Å            T  ¸    
=   : Ï- !   isCommandEnabled#   cmd_compactFolder   ÿÿÿÿ   #   hideIfAppropriate               ®       ¹   
   G                                       aID   separator   sibling çE  G  þ      	      ;    ¸   
T  : W   QV   5   W  Q   kmV  ¸   
=   : =      >;   â   T  V  5   =   E   Q;   	â   	V   : : QV  5   W  QãV  ÿÿÿ;   â   T  B: QÏÈÎ(q Ð
ÉâÎ Î Ë 	Ò    document   getElementById   previousSibling   getAttribute   hidden	   true   ShowMenuItem   localName   menuseparator-   hasAVisibleNextSibling    *   q       ÿÿÿÿ         treecols       nodeList       treeColPicker                    i                    popup        ÿÿÿÿ      #   showNewFolderItem        ÿÿÿÿ         kFavoriteFlag       Ý   b           ÿÿÿÿ   Ò   n          J  V       ÿÿÿÿ£            Á    ÿÿÿÿ   Ô  W   ÿÿÿÿ   ÿÿÿÿ      ShowMenuItem                        ¹                                              id   showItem  ÍH  I              ;    ¸   
T  : T  6   QÒ%Ê
    document   getElementById   hidden   ÿÿÿÿ      EnableMenuItem                        ¹                                              id   enableItem  *I  tI              ;    ¸   
T  : T  6   QÒ'Ê    document   getElementById   disabled   ÿÿÿÿ   !   SetMenuItemLabel                 &       ¹                                              id   label  I  ÚI              ;    ¸   
T  : ¸   
=   T : Qå9    document   getElementById   setAttribute   label   ÿÿÿÿ   -   hasAVisibleNextSibling               d       ¹      2                                       aNode   sibling *J  K  %            T  5    W   Q   ImV   ¸   
=   : =   E   QV   5   =      CV   5    W   QãV   ÿÿÿ¶BÍ(O )ÐÏÏÎ (	Ë /    nextSibling   getAttribute   hidden	   true   localName   menuseparator       O      ÿÿÿÿ   #   IsMenuItemShowing               3       ¹                                              menuID	   item 6K  ®K  2            ;    ¸   
T  : W   QV      V   5   =   BÏÈÐ    document   getElementById   hidden	   true   ÿÿÿÿ      addEmail                 S       ¹   	   #                                         url   addressesíK  M  ;      	      ;    5   W   Q;   â   V   : W  Q;   ¸   
=   =   =   Y   V  ]   : QÏÎÈÑÉ ?/    gContextMenu   linkURL   getEmail   window   openDialogu   chrome://messenger/content/addressbook/abNewCardDialog.xul   _   chrome,resizable=no,titlebar,modal,centerscreen   primaryEmail   ÿÿÿÿ      composeEmailTo                       ¹      L                           (              fields   params1M  =P  E      	      ;    5   5   ¸   
;    5   5   :    Q;    5   5   ¸   
;    5   5   :   QV   ;   	â   	;   
5   : 6   QV  ;    5   5   5   6   QV  ;    5   5   5   6   Q;   5      -V  ;   ¸   
;   5   5   : 6   QV  V   6   Q;   5   ¸   
@V  : QÖÏ GÈÖÏ IÈØÉÞÞÊÐÏ OÉÎÚ?    Components   classes[   @mozilla.org/messengercompose/composefields;1   createInstance   interfaces!   nsIMsgCompFields[   @mozilla.org/messengercompose/composeparams;1'   nsIMsgComposeParams   to   getEmail   gContextMenu   linkURL	   type   nsIMsgCompType   New   format!   nsIMsgCompFormat   Default   gFolderDisplay   displayedFolder   identity   accountManager3   getFirstIdentityForServer   server   composeFields   MailServices   compose7   OpenComposeWindowWithParams   ÿÿÿÿ      getEmail              é       ¹      H                                     url   qmark   addresses   characterSet {P  ïR  W      
      T  ¸    
=   : W   QV  QV   ;      %T  ¸   
;   V   : W  Q   T  ¸   
;   : W  Q  Q;   5   5   5   W  Q;   	5   
5   ¸   
;   	5   5   :   QV  ¸   
V  V  : W  QÈ     Qv  QÈ    V  ÏÈÊ ÓÍÏÈiÙ
ÖÏ cÈÓÎÓ    indexOf   ?   mailtolength   substring   substr   gContextMenu   target   ownerDocument   characterSet   Components   classesA   @mozilla.org/intl/texttosuburi;1   getService   interfaces   nsITextToSubURI!   unEscapeURIForUI    ÿÿÿÿ         textToSubURI       ÿÿÿÿ         ex         c   m       d   g   ÿÿÿÿ   Ñ      ÿÿÿÿ   ÿÿÿÿ      CopyMessageUrl                      ¹      =                                      hdr   server   url   clipboardS  ]U  m            ;    5   W   QV   5   5   W  QV  5   ;   5   5   5      =   	   
=   
W  QV  V  5   =   V  5   =   V   5   W  Q;   5   5   ¸   
;   5   5   : W  QV  ¸   
V  : Q   6  Qv  Q;   â   =   V  =   : QÈ      ÍÏÓÞ
ÔíxÖÏ xÈØÌå    gDBView5   hdrForFirstSelectedMessage   folder   server   socketType   Components   interfaces   nsMsgSocketType   SSL   snews://   news://   hostName   :	   port   /   messageId   classesK   @mozilla.org/widget/clipboardhelper;1   getService%   nsIClipboardHelper   copyString	   dump   ex=   
    ÿÿÿÿ         ex            Ñ       Ó   *   ÿÿÿÿ